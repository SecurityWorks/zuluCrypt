/*
 *
 *  Copyright ( c ) 2012-2015
 *  name : Francis Banyikwa
 *  email: mhogomchungu@gmail.com
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 2 of the License, or
 *  ( at your option ) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "tablewidget.h"
#include <QDebug>

#include <QTableWidget>
#include <QTableWidgetItem>
#include <QStringList>

#include <functional>

static void _for_each_column( QTableWidget * table,int row,std::function< void( int,int ) > _function )
{
	if( row >= 0 && row < table->rowCount() ){

		auto col = table->columnCount() ;

		decltype( col ) i ;

		for( i = 0 ; i < col ; i++ ){

			_function( row,i ) ;
		}

		table->setCurrentCell( row,col - 1 ) ;
	}
}

static void _for_each_row( QTableWidget * table,int col,std::function< void( int,int ) > _function )
{
	if( col >= 0 && col < table->columnCount() ){

		auto row = table->rowCount() ;

		decltype( row ) i ;

		for( i = 0 ; i < row ; i++ ){

			_function( i,col ) ;
		}
	}
}

static void _update_table_row( QTableWidgetItem * item,bool setSelected )
{
	if( item ){

		auto table = item->tableWidget() ;
		auto row   = item->row() ;
		auto col   = table->columnCount() ;

		for( int i = 0 ; i < col ; i++ ){

			table->item( row,i )->setSelected( setSelected ) ;
		}

		if( setSelected ){

			table->setCurrentCell( row,col - 1 ) ;
		}

		table->setFocus() ;
	}
}

static QTableWidgetItem *
_set_item( QTableWidgetItem * item,const QString& text = QString(),const QFont& font = QFont() )
{
	item->setText( text ) ;
	item->setTextAlignment( Qt::AlignCenter ) ;
	item->setFont( font ) ;
	return item ;
}

void tablewidget::selectTableRow( QTableWidgetItem * current,QTableWidgetItem * previous )
{
	if( current && previous && previous->row() == current->row() ){

		auto table = current->tableWidget() ;
		table->setCurrentCell( current->row(),table->columnCount() - 1 ) ;
		table->setFocus() ;
	}else{
		_update_table_row( current,true ) ;
		_update_table_row( previous,false ) ;
	}
}

int tablewidget::addEmptyRow( QTableWidget * table )
{
	int row = table->rowCount() ;

	table->insertRow( row ) ;

	_for_each_column( table,row,[ table ]( int row,int col ){

		table->setItem( row,col,_set_item( new QTableWidgetItem ) ) ;
	} ) ;

	return row ;
}

int tablewidget::columnHasEntry( QTableWidget * table,const QString& entry,int column )
{
	if( column < 0 || column >= table->columnCount() ){

		return -1 ;
	}else{
		int rows = table->rowCount() ;

		for( int i = 0 ; i < rows ; i++ ){

			if( table->item( i,column )->text() == entry ){

				return i ;
			}
		}

		return -1 ;
	}
}

void tablewidget::addRowToTable( QTableWidget * table,const QStringList& list,const QFont& font )
{
	int j = list.size() ;

	if( j != table->columnCount() ){

		qDebug() << "ERROR: Table column count is NOT the same as QStringList size" ;
	}else{
		int row = table->rowCount() ;

		table->insertRow( row ) ;

		_for_each_column( table,row,[ & ]( int row,int col ){

			table->setItem( row,col,_set_item( new QTableWidgetItem,list.at( col ),font ) ) ;
		} ) ;
	}
}

void tablewidget::updateRowInTable( QTableWidget * table,const QStringList& list,int row,const QFont& font )
{
	int j = list.size() ;

	if( j != table->columnCount() ){

		qDebug() << "ERROR: table column count is NOT the same as QStringList size" ;
	}else{
		_for_each_column( table,row,[ & ]( int row,int col ){

			_set_item( table->item( row,col ),list.at( col ),font ) ;
		} ) ;
	}
}

void tablewidget::setRowFont( QTableWidget * table ,int row,const QFont& font )
{
	_for_each_column( table,row,[ & ]( int row,int col ){

		table->item( row,col )->setFont( font ) ;
	} ) ;
}

void tablewidget::deleteRowFromTable( QTableWidget * table,int row )
{
	if( row >= 0 && row < table->rowCount() ){

		table->removeRow( row ) ;

		tablewidget::selectLastRow( table ) ;
	}
}

void tablewidget::deleteTableRow( QTableWidget * table,const QString& value,int column )
{
	int r = tablewidget::columnHasEntry( table,value,column ) ;
	tablewidget::deleteRowFromTable( table,r ) ;
}

void tablewidget::selectRow( QTableWidget * table,int row )
{
	if( row >= 0 && row < table->rowCount() ){

		table->setCurrentCell( row,table->columnCount() - 1 ) ;
	}

	table->setFocus() ;
}

void tablewidget::selectRow( QTableWidget * table,const QString& e )
{
	tablewidget::selectRow( table,tablewidget::columnHasEntry( table,e ) ) ;
}

void tablewidget::selectLastRow( QTableWidget * table )
{
	tablewidget::selectRow( table,table->rowCount() - 1 ) ;
}

void tablewidget::setText( QTableWidget * table,int row,int col,const QString& text )
{
	table->setItem( row,col,_set_item( new QTableWidgetItem,text,table->item( row,col )->font() ) ) ;
}

QStringList tablewidget::tableColumnEntries( QTableWidget * table,int col )
{
	QStringList l ;

	_for_each_row( table,col,[ & ]( int row,int col ){

		l.append( table->item( row,col )->text() ) ;
	} ) ;

	return l ;
}

QStringList tablewidget::tableRowEntries( QTableWidget * table,int row )
{
	QStringList l ;

	_for_each_column( table,row,[ & ]( int row,int col ){

		l.append( table->item( row,col )->text() ) ;
	} ) ;

	return l ;
}
