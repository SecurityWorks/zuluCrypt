/*
 * 
 *  Copyright (c) 2011
 *  name : mhogo mchungu
 *  email: mhogomchungu@gmail.com
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "password_dialog.h"
#include "zulucrypt.h"

#include <Qt>
#include <QObject>
#include <QFileDialog>
#include <QDir>
#include <iostream>
#include <QRadioButton>
#include <QPushButton>
#include <QMessageBox>

#include "miscfunctions.h"

passwordDialog::passwordDialog(QTableWidget * table,QWidget *parent ) : QDialog(parent)
{
	m_ui = new Ui::PasswordDialog() ;
	m_ui->setupUi(this);

	this->setFixedSize(this->size());
	this->setWindowFlags(Qt::Window | Qt::Dialog);
	this->setFont(parent->font());

	m_ui->PushButtonMountPointPath->setIcon(QIcon(QString(":/folder.png")));

	m_isWindowClosable = true ;

	m_table = table ;

	m_msg.setParent(this);

	connect(m_ui->PushButtonCancel,SIGNAL(clicked()),this,SLOT(HideUI())) ;
	connect(m_ui->PushButtonOpen,SIGNAL(clicked()),this,SLOT(buttonOpenClicked())) ;
	connect(m_ui->PushButtonMountPointPath,SIGNAL(clicked()),this,SLOT(mount_point()));
	connect(m_ui->PushButtonVolumePath,SIGNAL(clicked()),this,SLOT(file_path())) ;
	connect(m_ui->pushButtonPassPhraseFromFile,SIGNAL(clicked()),this,SLOT(clickedPassPhraseFromFileButton()));
	connect(m_ui->radioButtonPassPhraseFromFile,SIGNAL(clicked()),this,SLOT(passphraseFromFileOption())) ;
	connect(m_ui->radioButtonPassPhrase,SIGNAL(clicked()),this,SLOT(passphraseOption())) ;
	connect(m_ui->OpenVolumePath,SIGNAL(textChanged(QString)),this,SLOT(mountPointPath(QString)));
}

void passwordDialog::closeEvent(QCloseEvent *e)
{
	e->ignore();
	if( m_isWindowClosable == true )
		HideUI() ;
}

void passwordDialog::ShowUI(QString volumePath, QString mount_point)
{
	m_ui->OpenVolumePath->setText(volumePath);
	m_ui->checkBoxReadOnly->setChecked( true );
	m_ui->PassPhraseField->setFocus();
	m_ui->PassPhraseField->clear();
	m_ui->radioButtonPassPhrase->setChecked( true );
	m_ui->labelPassphrase->setText(tr("passphrase"));
	m_ui->PassPhraseField->setEchoMode(QLineEdit::Password);
	m_ui->pushButtonPassPhraseFromFile->setEnabled( false );
	m_ui->pushButtonPassPhraseFromFile->setIcon(QIcon(QString(":/passphrase.png")));
	m_ui->OpenVolumePath->setEnabled(false);
	m_ui->PushButtonVolumePath->setEnabled(false);
	m_ui->MountPointPath->setText(mount_point);
	if( volumePath.left(5) == QString("/dev/") || volumePath.left(5) == QString("UUID="))
		m_ui->PushButtonVolumePath->setIcon(QIcon(QString(":/partition.png")));
	else
		m_ui->PushButtonVolumePath->setIcon(QIcon(QString(":/file.png")));
	this->show();
}

void passwordDialog::ShowUI()
{
	m_ui->OpenVolumePath->clear();
	m_ui->OpenVolumePath->setFocus();
	m_ui->PassPhraseField->clear();
	m_ui->radioButtonPassPhrase->setChecked(true);
	m_ui->labelPassphrase->setText(tr("passphrase"));
	m_ui->pushButtonPassPhraseFromFile->setEnabled(false);
	m_ui->PassPhraseField->setEchoMode(QLineEdit::Password);
	m_ui->checkBoxReadOnly->setChecked(true);
	m_ui->OpenVolumePath->setEnabled(true);
	m_ui->PushButtonVolumePath->setEnabled(true);
	m_ui->PushButtonVolumePath->setIcon(QIcon(QString(":/file.png")));
	m_ui->pushButtonPassPhraseFromFile->setIcon(QIcon(QString(":/passphrase.png")));
	this->show();
}

void passwordDialog::mountPointPath(QString path)
{
	QString p = QDir::homePath() + QString("/") + path.split("/").last() ;
	m_ui->MountPointPath->setText(p) ;
}

void passwordDialog::passphraseOption()
{
	m_ui->PassPhraseField->setEchoMode(QLineEdit::Password);
	m_ui->PassPhraseField->clear();
	m_ui->pushButtonPassPhraseFromFile->setEnabled(false) ;
	m_ui->labelPassphrase->setText(tr("passphrase"));
	m_ui->pushButtonPassPhraseFromFile->setIcon(QIcon(QString(":/passphrase.png")));
}

void passwordDialog::passphraseFromFileOption()
{
	m_ui->PassPhraseField->setEchoMode(QLineEdit::Normal);
	m_ui->PassPhraseField->clear();
	m_ui->pushButtonPassPhraseFromFile->setEnabled(true) ;
	m_ui->labelPassphrase->setText(tr("key file"));
	m_ui->pushButtonPassPhraseFromFile->setIcon(QIcon(QString(":/keyfile.png")));
}

void passwordDialog::clickedPassPhraseFromFileButton()
{
	QString Z = QFileDialog::getOpenFileName(this,tr("Select passphrase file"),QDir::homePath(),0);
	m_ui->PassPhraseField->setText( Z );
}

void passwordDialog::clickedPartitionOption(QString dev)
{
	QString m_point = QDir::homePath() + QString("/") + dev.split("/").last();
	ShowUI(dev,m_point) ;
}

void passwordDialog::mount_point(void )
{	
	QString p = tr("Select Path to mount point folder") ;
	QString Z = QFileDialog::getExistingDirectory(this,p,QDir::homePath(),QFileDialog::ShowDirsOnly) ;
	m_ui->MountPointPath->setText( Z );
}

void passwordDialog::file_path(void )
{	
	QString Z = QFileDialog::getOpenFileName(this,tr("Select encrypted volume"),QDir::homePath(),0);
	m_ui->OpenVolumePath->setText( Z );
}

void passwordDialog::HideUI()
{	
	this->hide();
	emit HideUISignal();
}

void passwordDialog::buttonOpenClicked(void )
{	
	QString mountPointPath = miscfunctions::resolveHomeSymbol(m_ui->MountPointPath->text()) ;
	QString vp = miscfunctions::resolveHomeSymbol(m_ui->OpenVolumePath->text()) ;

	QString passPhraseField = m_ui->PassPhraseField->text() ;

	if( mountPointPath.isEmpty() || passPhraseField.isEmpty() || vp.isEmpty())
		return m_msg.UIMessage(tr("ERROR!"),tr("atleast one required field is empty"));

	passPhraseField.replace("\"","\"\"\"") ;
	vp.replace("\"","\"\"\"") ;
	mountPointPath.replace("\"","\"\"\"") ;

	QString mode ;

	if ( m_ui->checkBoxReadOnly->isChecked() )
		mode = "ro" ;
	else
		mode = "rw" ;

	QString passtype ;

	if ( m_ui->radioButtonPassPhraseFromFile->isChecked() )
		passtype = "-f" ;
	else
		passtype = "-p" ;

	QString a = QString(ZULUCRYPTzuluCrypt) ;
	QString b = vp;
	QString c = mountPointPath ;
	QString d = mode ;
	QString e = passtype ;
	QString f = passPhraseField ;

	QString exe = QString("%1 -o -d \"%2\" -m \"%3\" -e %4 %5 \"%6\"").arg(a).arg(b).arg(c).arg(d).arg(e).arg(f) ;

	runInThread * ovt = new runInThread(exe) ;
	connect(ovt,SIGNAL(finished(int)),this,SLOT(threadfinished(int))) ;
	m_isWindowClosable = false ;
	disableAll();
	QThreadPool::globalInstance()->start(ovt);
}

void passwordDialog::disableAll()
{
	m_ui->checkBoxReadOnly->setEnabled(false);
	m_ui->groupBox->setEnabled(false);
	m_ui->labelMoutPointPath->setEnabled(false);
	m_ui->labelPassphrase->setEnabled(false);
	m_ui->labelVolumePath->setEnabled(false);
	m_ui->MountPointPath->setEnabled(false);
	m_ui->OpenVolumePath->setEnabled(false);
	m_ui->PassPhraseField->setEnabled(false);
	m_ui->PushButtonCancel->setEnabled(false);
	m_ui->PushButtonMountPointPath->setEnabled(false);
	m_ui->PushButtonOpen->setEnabled(false);
	m_ui->pushButtonPassPhraseFromFile->setEnabled(false);
	m_ui->PushButtonVolumePath->setEnabled(false);
	m_ui->radioButtonPassPhrase->setEnabled(false);
	m_ui->radioButtonPassPhraseFromFile->setEnabled(false);
	m_ui->radioButtonPassPhrase->setEnabled(false);
}

void passwordDialog::enableAll()
{
	m_ui->checkBoxReadOnly->setEnabled(true);
	m_ui->groupBox->setEnabled(true);
	m_ui->labelMoutPointPath->setEnabled(true);
	m_ui->labelPassphrase->setEnabled(true);
	m_ui->labelVolumePath->setEnabled(true);
	m_ui->MountPointPath->setEnabled(true);
	m_ui->OpenVolumePath->setEnabled(true);
	m_ui->PassPhraseField->setEnabled(true);
	m_ui->PushButtonCancel->setEnabled(true);
	m_ui->PushButtonMountPointPath->setEnabled(true);
	m_ui->PushButtonOpen->setEnabled(true);
	m_ui->pushButtonPassPhraseFromFile->setEnabled(true);
	m_ui->PushButtonVolumePath->setEnabled(true);
	m_ui->radioButtonPassPhrase->setEnabled(true);
	m_ui->radioButtonPassPhraseFromFile->setEnabled(true);
	m_ui->radioButtonPassPhrase->setEnabled(true);
}

void passwordDialog::success(void)
{
	checkvolumetype * cvt = new checkvolumetype(m_ui->OpenVolumePath->text());
	connect(cvt,SIGNAL(done(QString)),this,SLOT(done(QString)));
	QThreadPool::globalInstance()->start(cvt) ;
}

void passwordDialog::done(QString type)
{
	QString q = miscfunctions::resolveHomeSymbol(m_ui->OpenVolumePath->text()) ;
	QString z = miscfunctions::resolveHomeSymbol(m_ui->MountPointPath->text());

	if(q.mid(0,5) == QString("UUID="))
		miscfunctions::addItemToTableWithType(m_table,q,z,type);
	else{
		char * p = realpath(q.toAscii().data(),NULL) ;
		if(p != NULL){
			miscfunctions::addItemToTableWithType(m_table,QString(p),z,type);
			free(p);
		}else
			miscfunctions::addItemToTableWithType(m_table,q,z,type);
	}
	HideUI();
}

void passwordDialog::threadfinished(int status)
{
	m_isWindowClosable = true ;

	switch ( status ){
		case 0: success();
			return ;
		case 1 : m_msg.UIMessage(tr("ERROR!"),tr("failed to mount ntfs file system using ntfs-3g,is ntfs-3g package installed?" )) ;		break ;
		case 2 : m_msg.UIMessage(tr("ERROR!"),tr("there seem to be an open volume accociated with given address" ));				break ;
		case 3 : m_msg.UIMessage(tr("ERROR!"),tr("no file or device exist on given path" )) ; 							break ;
		case 4 : m_msg.UIMessage(tr("ERROR!"),tr("wrong passphrase" ));
			 enableAll();
			 m_ui->PassPhraseField->clear();
			 m_ui->PassPhraseField->setFocus();
			 return ;			
		case 5 : m_msg.UIMessage(tr("ERROR!"),tr("could not create mount point, invalid path or path already taken") ) ;			break ;
		case 6 : m_msg.UIMessage(tr("ERROR!"),tr("passphrase file does not exist" ));								break ;
		case 8 : m_msg.UIMessage(tr("ERROR!"),tr("failed to open volume" ));									break ;
		case 9 : m_msg.UIMessage(tr("ERROR!"),tr("mount point path is already taken" ));							break ;
		case 10: m_msg.UIMessage(tr("ERROR!"),tr("\",\" ( comma ) is not a valid mount point" ));						break ;
		case 11: m_msg.UIMessage(tr("ERROR!"),tr("one or more required argument(s) for this operation is missing\n" ));				break ;
		case 12: m_msg.UIMessage(tr("ERROR!"),tr("could not get a lock on /etc/mtab~" ));							break ;
		case 13: m_msg.UIMessage(tr("ERROR!"),tr("wrong argument for mode, valid options are \"rw\" or \"ro\"" ));				break ;
		case 14: m_msg.UIMessage(tr("ERROR!"),tr("could not get enought memory to hold the key file" ));					break ;
		case 15: m_msg.UIMessage(tr("ERROR!"),tr("failed to open volume and failed to close the mapper, advice to do it manunally" ));		break ;
		case 16: m_msg.UIMessage(tr("ERROR!"),tr("could not resolve full path of mount point" ));						break ;
		case 17: m_msg.UIMessage(tr("ERROR!"),tr("could not resolve full path of device address" ));						break ;
		case 18: m_msg.UIMessage(tr("ERROR!"),tr("-O and -m options can not be used together" ));						break ;
		case 19: m_msg.UIMessage(tr("ERROR!"),tr("insufficient privilege to create mount point" ));						break ;
		case 20: m_msg.UIMessage(tr("ERROR!"),tr("insufficient privilege to open device" ));							break ;
		case 21: m_msg.UIMessage(tr("ERROR!"),tr("insufficient privilege to create mount point" ));						break ;
		case 22: m_msg.UIMessage(tr("ERROR!"),tr("insufficient privilege to open key file for reading" ));					break ;
		case 23: m_msg.UIMessage(tr("ERROR!"),tr("insufficient privilege to open device in read/write mode" ));					break ;
		case 24: m_msg.UIMessage(tr("ERROR!"),tr("there seem to be an opened mapper associated with the device" ));				break ;
		case 110:m_msg.UIMessage(tr("ERROR!"),tr("can not find a partition that match presented UUID" ));					break ;
		default: m_msg.UIMessage(tr("ERROR!"),tr("unrecognized ERROR with status number %1 encountered").arg(status));
	}
	enableAll();
}

passwordDialog::~passwordDialog()
{
	delete m_ui ;
}

