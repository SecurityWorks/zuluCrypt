<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ar_SA">
<context>
    <name>DialogMsg</name>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="17"/>
        <source>Dialog</source>
        <translation>نافذة رسالة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="29"/>
        <source>&amp;Ok</source>
        <translation>نعم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="42"/>
        <source>&amp;Yes</source>
        <translation>نعم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="55"/>
        <source>&amp;No</source>
        <translation>لا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="68"/>
        <source>text</source>
        <translation>نص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="90"/>
        <source>type</source>
        <translation>نوع</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="109"/>
        <source>cipher</source>
        <translation>شفرة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="125"/>
        <source>key size</source>
        <translation>حجم المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="141"/>
        <source>device</source>
        <translation>جهاز</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="160"/>
        <source>loop</source>
        <translation>دورة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="179"/>
        <source>offset</source>
        <translation>إزاحة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="195"/>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="243"/>
        <source>size</source>
        <translation>حجم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="211"/>
        <source>mode</source>
        <translation>طور</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="227"/>
        <source>fs</source>
        <translation>fs</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="259"/>
        <source>used</source>
        <translation>مستخدم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="275"/>
        <source>unused</source>
        <translation>غير مستخدم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="291"/>
        <source>used %</source>
        <translation>نسبة المستخدم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.ui" line="307"/>
        <source>active slots</source>
        <translation>الخانات النشطة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="95"/>
        <source>
&quot;system volumes&quot; are volumes that either udev has identify them as such if udev is enabled or have an entry in &quot;/etc/fstab&quot;,&quot;/etc/crypttab&quot; or &quot;/etc/zuluCrypt/system_volumes.list&quot;.

If you prefer for a volume not to be considered a system volume,start the toolfrom root account and then go to &quot;menu-&gt;options-&gt;manage non system partitions&quot; and add the volume to the list and the volume will stop being considered as &quot;system&quot;.

Alternatively,you can add yourself to group &quot;zulucrypt&quot; and &quot;zulumount&quot; and all restrictions will go away.</source>
        <translation>مجلدات النظام هي التي يحددها يو ديف من خلال تعريفه في ملف  &quot;/etc/fstab&quot;,&quot;/etc/crypttab&quot; or &quot;/etc/zuluCrypt/system_volumes.list
إذا لم ترغب في اعتبار المجلد كمجلد نظامي، شغل التطبيق كمستخدم مدير ثم اذهب إلى قائمة الخيارات واختر إدارة الأجزاء غير النظامية. أضف المجلد ضمن القائمة ومن تلك اللحظة لن يعتبر ذاك المجلد كمجلد نظامي.
كبديل عن ذلك تستطيع إضافة نفسك تحت مجموعة زولوكربت وزولوماونت وسوف تزول هذه القيود.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="104"/>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="123"/>
        <source>INFORMATION</source>
        <translation>معلومة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="115"/>
        <source>Insufficient privilege to access a system device,
only root user or members of group zulucrypt can do that</source>
        <translation>صلاحية غير كافية للدخول على جهاز النظام. فقط المستخدم المدير أو عضو ضمن مجموعة زولوكربت يستطيع عمل ذلك.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="117"/>
        <source>Insufficient privilege to access a system device in read/write mode,
only root user or members of group zulucrypt-write can do that</source>
        <translation>صلاحية غير كافية للدخول على جهاز النظام للكتابة. فقط المستخدم المدير أو عضو ضمن مجموعة زولوكربت-الكتابة يستطيع عمل ذلك.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="120"/>
        <source>You do not seem to have proper permissions to access the encrypted file in %1 mode,check file permissions and try again</source>
        <translation>لا يظهر أن لديك صلاحيات كافية للدخول على الملف المشفر في طور 1%. تأكد من الصلاحيات ثم حاول مرة أخرى.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="247"/>
        <source>type:</source>
        <translation>نوع</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="248"/>
        <source>cipher:</source>
        <translation>شفرة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="249"/>
        <source>keysize:</source>
        <translation>حجم المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="250"/>
        <source>offset:</source>
        <translation>الإزاحة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="251"/>
        <source>device:</source>
        <translation>جهاز</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="252"/>
        <source>loop:</source>
        <translation>دورة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="253"/>
        <source>mode:</source>
        <translation>طور</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="254"/>
        <source>active slots:</source>
        <translation>الخانات النشطة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="255"/>
        <source>file system:</source>
        <translation>نظام الملفات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="256"/>
        <source>total space:</source>
        <translation>المساحة الكلية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="257"/>
        <source>used space:</source>
        <translation>المساحة المستخدمة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="258"/>
        <source>free space:</source>
        <translation>المساحة المتاحة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="259"/>
        <source>used%:</source>
        <translation>نسبة الاستخدام%</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="260"/>
        <source>UUID:</source>
        <translation>الرقم التعريفي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogmsg.cpp" line="327"/>
        <source>Do not show this dialog again</source>
        <translation>لا تظهر هذه الرسالة مرة أخرى</translation>
    </message>
</context>
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="29"/>
        <source>Open Encrypted Volume</source>
        <translation>افتح الكجلد المشفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="63"/>
        <source>&amp;Open</source>
        <translation>افتح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="82"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="101"/>
        <source>Mount In &amp;Read Only Mode</source>
        <translation>حمَل في طور القراءة فقط</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="117"/>
        <source>select mount point path</source>
        <translation>اختر مسار نقطة التحميل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="136"/>
        <source>open volume path</source>
        <translation>اختر مسار المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="174"/>
        <source>open key file</source>
        <translation>افتح ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="213"/>
        <location filename="../../zuluCrypt-gui/password.ui" line="284"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="327"/>
        <source>LUKS/TrueCrypt/BitLocker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="474"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="232"/>
        <source>Mount Name</source>
        <translation>اسم التحميل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="44"/>
        <source>&amp;Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="251"/>
        <source>Volume Path</source>
        <translation>مسار المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="289"/>
        <source>KeyFile</source>
        <translation>ملف لبمفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="294"/>
        <source>Key+KeyFile</source>
        <translation>مفتاح+ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="299"/>
        <source>Plugin</source>
        <translation>إضافات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="313"/>
        <source>&amp;Share Mount Point</source>
        <translation>شارك نقطة التحميل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="332"/>
        <source>VeraCrypt</source>
        <translation>فيرا كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="337"/>
        <source>VeraCrypt System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="342"/>
        <source>PLAIN dm-crypt</source>
        <translation>dm-crypt عادي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="356"/>
        <source>Volume Type</source>
        <translation>نوع المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="452"/>
        <source>TextLabel</source>
        <translation>النص الملصق</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="505"/>
        <source>Enter Comma Separated Volume&apos;s File System Options Below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="531"/>
        <source>Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password.ui" line="544"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="275"/>
        <source>zuluCrypt: Failed To Establish Connection With zuluPolkit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="621"/>
        <source>
options:
	-d   path to where a volume to be auto unlocked/mounted is located
	-m   tool to use to open a default file manager(default tool is xdg-open)
	-e   start the application without showing the GUI
</source>
        <translation>خيارات

d .. المسار إلى المجلد ليتم فتحه/تحميله تلقائيا
m.. أداة فتح مدير الملفات الافتراضي (الافتراضي هو xdg-open)
e.. شغل التطبيق من دون الواجهة الرسومية
</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1010"/>
        <source>If the option is checked,a primary private mount point will be created in &quot;%1&quot;
and a secondary publicly accessible &quot;mirror&quot; mount point will be created in &quot;%2&quot;</source>
        <translation>إذا تم تفعيل الخيار، سوف يتم تهيئة نقطة تحميل خاصة رئيسية في &quot;1%&quot;
و أخرى فرعية الدخول إليها عام، وصورة من نقطة التحميل تهيئ في &quot;2%&quot;</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1021"/>
        <source>public mount point: </source>
        <translation>نقطة تحميل عامة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1654"/>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1681"/>
        <source>Manage Favorites</source>
        <translation>التحكم في المفضلات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1656"/>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1685"/>
        <source>Mount All</source>
        <translation>حمل الجميع</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1719"/>
        <source>about zuluCrypt</source>
        <translation>حول زولو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1918"/>
        <source>hmac plugin.

This plugin generates a key using below formular:

key = hmac(sha256,passphrase,keyfile contents)</source>
        <translation>إضافة hmc

هذه الإضافة تولد مفتاحا طبقا للمعادلة:

المفتاح= hmac(sha256,كلمة السر,مفتاح المحتوى)</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1923"/>
        <source>keykeyfile plugin.

This plugin generates a key using below formular:

key = passphrase + keyfile contents</source>
        <translation>الإضافة المفتاح-ملف المفتاح

هذه الإضافة تولد مفتاحا باستخدام الصيغة التالية:

المفتاح = كلمة السر + محتوى ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1928"/>
        <source>gpg plugin.

This plugin retrives a key locked in a gpg file with a symmetric key</source>
        <translation>إضافة pgp

هذه الإضافة تسترجع المفتاح المغلق في ملف pgp بمفتاح متماثل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="2678"/>
        <source>Failed To Start Helper Application.

&quot;org.zulucrypt.zulupolkit.policy&quot; polkit file is misconfigured,
zuluPolkit executable could not be found
 or pkexec failed to start zuluPolkit.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="400"/>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1153"/>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1946"/>
        <source>ERROR</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="401"/>
        <source>Failed to locate pkexec executable</source>
        <translation>فشل في تحديد الملف التنفيذي pkexec</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1152"/>
        <source>&quot;%1&quot; and &quot;%2&quot; Folders Must Be Writable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.cpp" line="1946"/>
        <source>Could not find &quot;gpg&quot; executable in &quot;/usr/local/bin&quot;,&quot;/usr/bin&quot; and &quot;/usr/sbin&quot;</source>
        <translation>لم يمكن تحديد ملف pgp التنفيذي في  &quot;/usr/local/bin&quot;,&quot;/usr/bin&quot; and &quot;/usr/sbin&quot;</translation>
    </message>
</context>
<context>
    <name>createVolumeDialog</name>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumedialog.ui" line="17"/>
        <source>Warning!!</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumedialog.ui" line="29"/>
        <source>&amp;Yes</source>
        <translation>نعم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumedialog.ui" line="42"/>
        <source>&amp;No</source>
        <translation>لا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumedialog.ui" line="55"/>
        <source>This operation will lead to permanent destrunction of all present data in /dev/sdc1. Are you sure you want to continue?</source>
        <translation>هذه العملية سوف تؤدي إلى تدمير كامل للبيانات الموجودة في /dev/sdc1. هل أنت متأكد؟</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumedialog.cpp" line="44"/>
        <source>This operation will lead to permanent destrunction of all present data in &quot;%1&quot;.

Are you sure you want to continue?</source>
        <translation>هذه العملية سوف تؤدي إلى تدمير كامل للبيانات الموجودة في1%.

هل أنت متأكد؟</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumedialog.cpp" line="86"/>
        <source>It is advised to create encrypted containers over random data to prevent information leakage.

Do you want to write random data to &quot;%1&quot; first before creating an encrypted container in it?

You can stop the random data writing process anytime you want if it takes too long and you can no longer wait.

</source>
        <translation>ينصح بإنشاء حاويات مشفرة على بيانات عشوائية منعا لتسرب المعلومات.

هل ترغب في كتابة بيانات عشوائية على &quot;1%&quot; أولا قبل إنشاء الحاوية بها؟

يمكنك إيقاف عملية كتابة البيانات العشوائية في أي وقت إذا استغرقت مدة طويلة ولا يمكنك الانتظار.</translation>
    </message>
</context>
<context>
    <name>createVolumeInExistingFIle</name>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="14"/>
        <source>Create Volume In Existing File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="41"/>
        <source>Select Cover File (Video files like mp4 and mkv)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="83"/>
        <source>Container Size (MB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="112"/>
        <source>Volume Properties</source>
        <translation type="unfinished">خصائص المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="141"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished">ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="154"/>
        <source>C&amp;reate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="167"/>
        <source>Volume OffSet
(Auto calculated)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="202"/>
        <source>Create A Plain dm-crypt Container Hidden Inside Cover File (Steganography)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="235"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.ui" line="283"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="171"/>
        <source>Extending A Host File Size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="191"/>
        <source>Enter Path To Existing File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="239"/>
        <source>Average Speed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="240"/>
        <source>ETA:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="241"/>
        <source>Percentage Completed: %1%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="270"/>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="281"/>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="288"/>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="292"/>
        <source>ERROR</source>
        <translation type="unfinished">خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="270"/>
        <source>AtLeast One Required Field Is Empty</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="281"/>
        <source>Illegal Character Found In The Container Size Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="288"/>
        <source>Failed To Open File In Write Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="292"/>
        <source>Failed To Open &quot;/dev/urandom&quot; Device In Read Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="311"/>
        <source>Creating A Plain DM-Crypt Volume</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="315"/>
        <source>Volume Created Successfully</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolumeinexistingfile.cpp" line="317"/>
        <source>Failed To Create A Volume</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>createfile</name>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="17"/>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="62"/>
        <source>Create A Container File</source>
        <translation>أنشئ ملف حاوية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="39"/>
        <source>File Name</source>
        <translation>اسم الملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="68"/>
        <source>File Path</source>
        <translation>مسار الملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="87"/>
        <source>File Size</source>
        <translation>حجم الملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="129"/>
        <source>open a folder dialog box</source>
        <translation>افتح نافذة المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="145"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="164"/>
        <source>% Complete</source>
        <translation>%مكتمل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="183"/>
        <source>C&amp;reate</source>
        <translation>أنشئ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="206"/>
        <source>KB</source>
        <translation>كيلو بايت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="211"/>
        <source>MB</source>
        <translation>ميجا بايت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="216"/>
        <source>GB</source>
        <translation>جيجا بايت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="243"/>
        <source>Do Not Write Random Data To Container(STRONGLY discouraged)</source>
        <translation>لا تكتب بيانات عشوائية على الحاوية (لا ينصح به بشدة)</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="262"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.ui" line="281"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="153"/>
        <source>
By default,zuluCrypt creates a volume in a container file over randomly generated data to hide usage patterns of the container.

This process takes time and it may take a very,very long time if the volume about to be created is large enough and this option exists to skip the process for the impatient among us but but it comes at a cost and the cost may be too high when it finally reveal itself while infront of an adversary when they look at the encrypted container and manage to derive meaning based on how the container looks from outside.

If you know what you are doing,then continue by all means,if in doubt,my advise is to endure the process and be safer in the long run.</source>
        <translation>الوضع الافتراضي أن زولو كربت ينشئ الحاوية المشفرة على بيانات عشوائية لإخفاء نمط الاستخدام لها.

هذه العمليةتستغرق وقتا طويلا خصوصا إذا كان حجم الحاوية كبيرا. هناك خيار لتجاوز هذه العملية للمستخدم العجل. لكن ضريبة ذلك عالية ويمكن أن تكشف للخصم حين يفحص الحاوية من الخارج.

إذا كنت تعي ما تفعله، استمر بكل الأحوال، وإذا كنت في شك فينصح بتحمل طول العملية لتكون في مأمن مستقبلا.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="165"/>
        <source>INFO</source>
        <translation>معلومات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="177"/>
        <source>File name field is empty</source>
        <translation>حقل الاسم فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="180"/>
        <source>File path field is empty</source>
        <translation>حقل المسار فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="183"/>
        <source>File size field is empty</source>
        <translation>حقل الحجم فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="187"/>
        <source>WARNING</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="187"/>
        <source>Are you really sure you do not want to create a more secured volume?</source>
        <translation>هل أنت متأكد أنك لا تريد إنشاء حاوية أكثر أمانا؟</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="200"/>
        <source>Illegal character in the file size field.Only digits are allowed</source>
        <translation>إدخال غير مقبول في حقل الحجم. تقبل الأرقام فقط.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="204"/>
        <source>File with the same name and at the destination folder already exist</source>
        <translation>يوجد اسم بنفس الاسم في المجلد المستهدف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="207"/>
        <source>You dont seem to have writing access to the destination folder</source>
        <translation>لا يبدو أن لديك صلاحية الكتابة على المجلد المستهدف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="224"/>
        <source>Container file must be bigger than 3MB</source>
        <translation>ملف الحاوية يجب أن يكون أكبر من 3 ميجا بايت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="239"/>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="247"/>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="269"/>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="277"/>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="383"/>
        <source>Failed to create volume file</source>
        <translation>فشل في إنشاء ملف الحاوية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="261"/>
        <source>Failed to enable polkit support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="295"/>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="389"/>
        <source>Operation terminated per user choice</source>
        <translation>تم إلغاء العملية من قبل المستخدم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="302"/>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="386"/>
        <source>Could not open cryptographic back end to generate random data</source>
        <translation>لم يمكن فتح خلفية التشفير لتوليد بيانات عشوائية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="398"/>
        <source>Terminating file creation process</source>
        <translation>إنهاء عملية إنشاء ملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="399"/>
        <source>Are you sure you want to stop file creation process?</source>
        <translation>هل أنت متأكد من رغبتك في إيقاف عملية إنشاء ملف؟</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="423"/>
        <source>Average Speed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="424"/>
        <source>ETA:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createfile.cpp" line="433"/>
        <source>Select Path to where the file will be created</source>
        <translation>اختر مسارا للملف الذي ستنشئه</translation>
    </message>
</context>
<context>
    <name>createkeyfile</name>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="17"/>
        <source>Create A KeyFile</source>
        <translation>أنشئ ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="39"/>
        <source>Keyfile Name</source>
        <translation>اسم ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="58"/>
        <source>path to a folder to create a key in</source>
        <translation>المسار للمجلد الذي يحوي ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="71"/>
        <source>open a folder a key file will be created in</source>
        <translation>افتح المجلد الذي يحوي ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="87"/>
        <source>C&amp;reate</source>
        <translation>أنشئ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="106"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="125"/>
        <source>KeyFile Path</source>
        <translation>مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="144"/>
        <source>RNG</source>
        <translation>RNG</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="186"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.ui" line="205"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.cpp" line="153"/>
        <source>The key name field is empty</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.cpp" line="157"/>
        <source>Folder path to where the key will be created is empty</source>
        <translation>المسار للمجلد الذي يحوي ملف المفتاح فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.cpp" line="161"/>
        <source>File with the same name and at the destination folder already exist</source>
        <translation>يوجد ملف بنفس الاسم في المجلد الذي يحوي ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.cpp" line="165"/>
        <source>You dont seem to have writing access to the destination folder</source>
        <translation>لايبدو أن لديك صلاحية دخول على المجلد المستهدف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.cpp" line="218"/>
        <source>Process interrupted,key not fully generated</source>
        <translation>العملية تم قطعها. المفتاح لم يولد بشكل كامل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.cpp" line="221"/>
        <source>KeyFile successfully created</source>
        <translation>ملف المفتاح أنشئ بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createkeyfile.cpp" line="228"/>
        <source>Select A Folder To Create A Key File In</source>
        <translation>اختر المجلد الذي ينشئ به ملف المفتاح</translation>
    </message>
</context>
<context>
    <name>createvolume</name>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="20"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="210"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="680"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="760"/>
        <source>Create A New Volume</source>
        <translation>أنشئ مجلدا جديدا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="42"/>
        <source>Path to Device</source>
        <translation>المسار للقرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="61"/>
        <source>C&amp;reate</source>
        <translation>أنشئ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="80"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="115"/>
        <source>open a key file</source>
        <translation>افتح ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="126"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="131"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="224"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="229"/>
        <source>Key</source>
        <translation>مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="131"/>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="300"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="691"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="771"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="160"/>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="319"/>
        <source>Repeat Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="226"/>
        <source>Advanced LUKS2 Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="262"/>
        <source>Volume Type</source>
        <translation>نوع المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="361"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="357"/>
        <source>Volume Size</source>
        <translation>حجم المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="391"/>
        <source>Bytes</source>
        <translation>بايت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="396"/>
        <source>KiloBytes</source>
        <translation>كيلو بايت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="401"/>
        <source>MegaBytes</source>
        <translation>ميجا بايت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="406"/>
        <source>GigaBytes</source>
        <translation>جيجا بايت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="430"/>
        <source>Iteration Time (milliseconds)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="476"/>
        <source>Volume Options</source>
        <translation>خيارات المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="495"/>
        <source>File System</source>
        <translation>نظام الملفات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="511"/>
        <source>random number generator</source>
        <translation>مولد الأرقام العشوائي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="514"/>
        <source>RNG</source>
        <translation>RNG</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="543"/>
        <source>PIM</source>
        <translation>PIM</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="565"/>
        <source>TextLabel</source>
        <translation>النص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="612"/>
        <source>Advanced Luks2 Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="631"/>
        <source>Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="644"/>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="663"/>
        <source>Sub System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="682"/>
        <source>Pbkdf Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="699"/>
        <source>argon2id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="704"/>
        <source>argon2i</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="709"/>
        <source>pbkdf2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="723"/>
        <source>Max Memory (KB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="742"/>
        <source>Parallel Threads</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="801"/>
        <source>Unlocking Time Cost(Milliseconds)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="843"/>
        <source>Allow Discard(TRIM)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="862"/>
        <source>Forced Iterations
(Dangerous And Could Lead To Extremely Long Unlocking Time)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.ui" line="892"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="119"/>
        <source>Options are separated by a &quot;.&quot; character.

</source>
        <translation>الخيارات مفصولة عن بعضها برمز &quot;.&quot;</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="120"/>
        <source>Multiple algorithms are separated by &quot;:&quot; character.

</source>
        <translation>خوارزميات عدة مفصولة عن بعضها برمز &quot;:&quot;</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="121"/>
        <source>Options are in a format of &quot;algorithm.cipher mode.key size in bits.hash&quot;

</source>
        <translation>الخيارات بهيئة &quot;خوارزميات تشفير حجم المفتاح بالبت للهاش&quot;</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="122"/>
        <source>Default option is the first entry on the list</source>
        <translation>الخيار الافتراضي هو الأول ضمن القائمة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="127"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="132"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="225"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="230"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="708"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="787"/>
        <source>KeyFile</source>
        <translation>ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="128"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="133"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="226"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="231"/>
        <source>Key+KeyFile</source>
        <translation>مفتاح+ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="129"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="134"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="227"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="232"/>
        <source>YubiKey Challenge/Response</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="146"/>
        <source>PLAIN dm-crypt</source>
        <translation>PLAIN dm-crypt</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="147"/>
        <source>PLAIN dm-crypt with offset</source>
        <translation>PLAIN dm-crypt مع إزاحة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="149"/>
        <source>LUKS1</source>
        <translation>LUKS1</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="150"/>
        <source>LUKS1+External Header</source>
        <translation>LUKS1+ترويسة خارجية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="151"/>
        <source>LUKS2</source>
        <translation>LUKS2</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="152"/>
        <source>LUKS2+External Header</source>
        <translation>LUKS2+ترويسة خارجية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="154"/>
        <source>LUKS</source>
        <translation>LUKS</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="155"/>
        <source>LUKS+External Header</source>
        <translation>LUKS+ترويسة خارجية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="157"/>
        <source>Normal TrueCrypt</source>
        <translation>تروكربت عادي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="158"/>
        <source>Normal+Hidden TrueCrypt</source>
        <translation>تروكربت عادي+مخفي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="159"/>
        <source>Normal VeraCrypt</source>
        <translation>فيرا كربت عادي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="160"/>
        <source>Normal+Hidden VeraCrypt</source>
        <translation>فيرا كربت عادي+مخفي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="205"/>
        <source>Passphrase Quality: 0%</source>
        <translation>جودة كلمة السر:0%</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="207"/>
        <source>Passphrase Quality: %1%</source>
        <translation>جودة كلمة السر:1%</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="302"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="325"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="326"/>
        <source>TrueCrypt Keys</source>
        <translation>مفاتيح تروكربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="313"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="340"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="341"/>
        <source>VeraCrypt Keys</source>
        <translation>مفاتيح فيرا كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="355"/>
        <source>Volume Offset</source>
        <translation>إزاحة المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="378"/>
        <source>Path To Device</source>
        <translation>مسار القرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="383"/>
        <source>Path To File</source>
        <translation>مسار الملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="581"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="591"/>
        <source>Keyfile Path</source>
        <translation>مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="734"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="812"/>
        <source>Passphrase Quality: 100%</source>
        <translation>جودة كلمة السر:100%</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="750"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="828"/>
        <source>Keys</source>
        <translation>مفاتيح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="966"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="974"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="981"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="991"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="999"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1008"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1015"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1035"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1048"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1065"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1069"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1236"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1255"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1260"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1395"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1396"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1398"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1399"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1400"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1401"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1402"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1403"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1404"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1405"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1406"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1407"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1408"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1409"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1410"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1411"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1412"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1413"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1414"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1415"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1416"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1417"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1418"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1419"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1420"/>
        <source>ERROR!</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="966"/>
        <source>Failed to enable polkit support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="974"/>
        <source>Volume path field is empty</source>
        <translation>مسار المجلد فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="981"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="991"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1015"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1048"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1065"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1255"/>
        <source>Atleast one required field is empty</source>
        <translation>حقل واحد فارغ على الأقل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="999"/>
        <source>Illegal character detected in the hidden volume size field</source>
        <translation>رمز غير مقبول تم إدخاله في حقل حجم المجلد المخفي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1008"/>
        <source>Hidden passphrases do not match</source>
        <translation>كلمتا السر المدخلة للمجلد المخفي لا تتطابقان</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1023"/>
        <source>WARNING</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1023"/>
        <source>It is best to create a hidden volume with vfat/fat file system.</source>
        <translation>يفضل إنشاء المجلد المخفي بنظام ملفات vfat/fat</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1035"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1069"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1236"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1260"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1408"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1416"/>
        <source>Passphrases do not match</source>
        <translation>كلمتا السر المدخلة لا تتطابقان</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1081"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1270"/>
        <source>ERROR</source>
        <translation type="unfinished">خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1081"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1270"/>
        <source>Failed To Locate Or Run Yubikey&apos;s &quot;ykchalresp&quot; Program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1309"/>
        <source>Please be patient as creating a VeraCrypt volume may take a very long time.

</source>
        <translation>يرجى التريث لأن إنشاء مجلد فيرا كربت يستغرق وقتا طويلا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1346"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1365"/>
        <source>WARNING!</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1346"/>
        <source>Volume created successfully but failed to create an external header</source>
        <translation>أنشئ المجلد بنجاح لكن فشلت عملية إنشاء ترويسة خارجية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1363"/>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1393"/>
        <source>SUCCESS!</source>
        <translation>نجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1363"/>
        <source>Luks volume created successfully.</source>
        <translation>تم إنشاء مجلد لوكس بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1365"/>
        <source>Luks volume created successfully,external header created successfully but failed to erase header on the device</source>
        <translation>تم إنشاء مجلد لوكس بنجاح، ونجاح إنشاء ترويسة خارجية. لكن فشل مسح الترويسة على القرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1380"/>
        <source>Volume created successfully.</source>
        <translation>تم إنشاء مجلد بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1384"/>
        <source>
Creating a backup of the &quot;%1&quot; volume header is strongly advised.
Please read documentation on why this is important.</source>
        <translation>ينصح بشدة عمل نسخة احتياطية لترويسة المجلد &quot;1%&quot;.
يرجى قراءة الدليل عن أهمية ذلك.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1395"/>
        <source>Presented file system is not supported,see documentation for more information</source>
        <translation>الملف المعروض غير مدعوم. أنظر الدليل لمزيد من المعلومات.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1396"/>
        <source>insufficient privilege to open a system device in read/write mode,
only root user or members of group zulucrypt can do that</source>
        <translation>صلاحيات غير كافية لفتح مجلد النظام للقراءة والكتابة.
فقط المستخدم المدير أو أعضاء مجموعة زولوكربت يمكنهم ذلك.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1398"/>
        <source>Could not create an encrypted volume</source>
        <translation>لم يمكن إنشاء مجلد مشفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1399"/>
        <source>Could not open volume for writing</source>
        <translation>لم يمكن فتح المجلد لققراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1400"/>
        <source>There seem to be an opened mapper associated with the device</source>
        <translation>يبدو أن المخطط المعين للقرص مفتوح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1401"/>
        <source>Can not create a volume on a mounted device</source>
        <translation>لم يمكن إنشاء مجلد على القرص المحمل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1402"/>
        <source>Container file must be bigger than 3MB</source>
        <translation>الحاوية يجب أن يكون حجمها 3 ميجا بايت على الأقل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1403"/>
        <source>%1 not found</source>
        <translation>%1 غير موجود</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1404"/>
        <source>Insufficient memory to hold your response</source>
        <translation>لا توجد ذاكرة كافية لاستيعاب ردك</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1405"/>
        <source>Operation terminated per user request</source>
        <translation>ألغى المستخدم العملية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1406"/>
        <source>Could not get passphrase in silent mode</source>
        <translation>لم يمكن العثور على كلمة السر بالطور الصامت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1407"/>
        <source>Insufficient memory to hold the passphrase</source>
        <translation>لا توجد ذاكرة كافية لاستيعاب كلمة السر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1409"/>
        <source>Invalid path to key file</source>
        <translation>مسار ملف المفتاح غير صحيح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1410"/>
        <source>Could not get a key from a key file</source>
        <translation>لم يمكن استرجاع المفتاح من ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1411"/>
        <source>Couldnt get enought memory to hold the key file</source>
        <translation>لم يمكن الحصول على ذاكرة كافية لاستيعاب ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1412"/>
        <source>Could not get a key from a socket</source>
        <translation>لم يمكن الحصول على مفتاح من المنفذ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1413"/>
        <source>One or more required argument(s) for this operation is missing</source>
        <translation>معطى أو أكثر من المعطيات المطلوبة غير موجود</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1414"/>
        <source>Can not get passphrase in silent mode</source>
        <translation>لم يمكن العثور على المفتاح في الطور الصامت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1415"/>
        <source>Insufficient memory to hold passphrase</source>
        <translation>لا توجد ذاكرة كافية لاستيعاب كلمة السر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1389"/>
        <source>Failed to create a volume</source>
        <translation>فشل في إنشاء المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1418"/>
        <source>Wrong argument detected for tcrypt volume</source>
        <translation>معطى غير صحيح تم اكتشافه لمجلد ترو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1419"/>
        <source>Could not find any partition with the presented UUID</source>
        <translation>لم يعثر على أي قسم يحمل هذا الرقم التعريفي المعروض</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/createvolume.cpp" line="1420"/>
        <source>Error Code: %1
--
StdOut: %2
--
StdError: %3</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>cryptfiles</name>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="39"/>
        <source>Destination</source>
        <translation>الوجهة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="74"/>
        <source>C&amp;reate</source>
        <translation>أنشئ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="93"/>
        <source>Source</source>
        <translation>المصدر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="148"/>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="196"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="225"/>
        <source>Repeat Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="292"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="311"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="441"/>
        <source>Key</source>
        <translation>مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="153"/>
        <source>KeyFile</source>
        <translation>ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="158"/>
        <source>Key+KeyFile</source>
        <translation>مفتاح+ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="442"/>
        <source>Repeat Key</source>
        <translation>كرر المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="244"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.ui" line="270"/>
        <source>% Complete</source>
        <translation>%مكتمل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="149"/>
        <source>Create An Encrypted Version Of A File</source>
        <translation>أنشئ نسخة مشفرة من الملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="160"/>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="173"/>
        <source>Create A Decrypted Version Of An encrypted File</source>
        <translation>أنشئ ملف عن طريق فك تشفير ملف مشفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="239"/>
        <source>Path to source field is empty</source>
        <translation>مسار الملف الأصل فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="246"/>
        <source>Invalid path to source file</source>
        <translation>مسار خطأ للملف المصدر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="250"/>
        <source>Destination path already taken</source>
        <translation>مسار الوجهة سبق تعيينه</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="254"/>
        <source>You dont seem to have writing access to the destination folder</source>
        <translation>لا يبدو لديك صلاحية الكتابة على المجلد الوجهة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="268"/>
        <source>Invalid path to key file</source>
        <translation>مسار خاطئ لملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="276"/>
        <source>First key field is empty</source>
        <translation>الحقل الأول فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="282"/>
        <source>Second key field is empty</source>
        <translation>الحقل الثاني فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="286"/>
        <source>Keys do not match</source>
        <translation>المفتاح لا يتطابق</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="295"/>
        <source>These very old encrypted files are no longer supported</source>
        <translation>هذه الملفات المشفرة قديما لم تعد مدعومة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="391"/>
        <source>Select Path to put destination file</source>
        <translation>اختر مسارا لوضع الملف الوجهة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="434"/>
        <source>Enter A Key</source>
        <translation>أدخل مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="459"/>
        <source>Enter A Path To A Keyfile Location</source>
        <translation>أدخل مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="460"/>
        <source>keyfile path</source>
        <translation>مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="487"/>
        <source>Generate a key made up of a passphrase and a keyfile</source>
        <translation>ولد مفتاحا مكونا من كلمة السر وملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="497"/>
        <source>Select A File You Want To Encrypt</source>
        <translation>اختر الملف الذي تريد تشفيره</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="499"/>
        <source>zuluCrypt encrypted files ( *.zc ) ;; All Files ( * )</source>
        <translation>زولو كربت شفر الملفات s ( *.zc ) ;; All Files ( * )</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="500"/>
        <source>Select A File You Want To Decrypt</source>
        <translation>اختر الملف الذي تريد فك تشفيره</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="510"/>
        <source>Select A Keyfile</source>
        <translation>اختر ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="531"/>
        <source>Encrypted file created successfully</source>
        <translation>تم تشفير الملف بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="534"/>
        <source>Decrypted file created successfully</source>
        <translation>تم فك تشفير الملف بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="536"/>
        <source>Could not open keyfile for reading</source>
        <translation>لم يمكن فتح ملف المفتاح بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="538"/>
        <source>Could not open encryption routines</source>
        <translation>لم يمكن فتح برمجيات التشفير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="540"/>
        <source>File or folder already exist at destination address</source>
        <translation>الملف موجود من قبل في هذه الوجهة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="543"/>
        <source>Insufficient privilege to create destination file</source>
        <translation>صلاحيات غير كافية لإنشاء الملف المستهدف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="545"/>
        <source>Presented key did not match the encryption key</source>
        <translation>المفتاح المعروض لا يطابق مفتاح التشفير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="547"/>
        <source>Operation terminated per user request</source>
        <translation>ألغى المستخدم العملية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="549"/>
        <source>Insufficient privilege to open source file for reading</source>
        <translation>صلاحيات غير كافية لقراءةء الملف من المصدر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="551"/>
        <source>Decrypted file created successfully but md5 checksum failed,file maybe corrupted</source>
        <translation>تم فك تشفير الملف بنجاح لكن الهاش md5 فشل. يمكن أن الملف معطوب</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="553"/>
        <source>Could not open reading encryption routines</source>
        <translation>لم يمكن فتح برمجيات تشفير القراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="555"/>
        <source>Could not open writing encryption routines</source>
        <translation>لم يمكن فتح برمجيات تشفير الكتابة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptfiles.cpp" line="557"/>
        <source>Failed to close encryption routine</source>
        <translation>لم يمكن غلق برمجيات التشفير </translation>
    </message>
</context>
<context>
    <name>cryptoinfo</name>
    <message>
        <location filename="../../zuluCrypt-gui/cryptoinfo.ui" line="17"/>
        <source>Greetings</source>
        <translation>تحيات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptoinfo.ui" line="29"/>
        <source>Ok</source>
        <translation>نعم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptoinfo.ui" line="42"/>
        <source>Please consult &quot;menu-&gt;help-&gt;open zuluCrypt.pdf&quot; to get an introduction on zuluCrypt.

Unity users,the menu is on the upper left corner of the screen when zuluCrypt has focus.

Project&apos;s homepage is at:
https://mhogomchungu.github.io/zuluCrypt

Recommending reading FAQ page from the project&apos;s main page.</source>
        <translation>يرجى الرجوع لقائمة المساعدة ثم افتح ملف  zuluCrypt.pd لمعرفة مبدئية عن زولو كربت

لمستخدمي Unity، القائمة في الأعلى يسار النافذة حينما يكون زولو كربت مفتوحا ومفعلا

موقع المشروع:
https://mhogomchungu.github.io/zuluCrypt

ينصح بقراءة صفحة الأسئلة والأجوبة من موقع المشروع الرئيس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/cryptoinfo.ui" line="71"/>
        <source>Do not show this message again.</source>
        <translation>لا تظهر هذه الرسالة مرة أخرى</translation>
    </message>
</context>
<context>
    <name>debugWindow</name>
    <message>
        <location filename="../../zuluCrypt-gui/debugwindow.ui" line="14"/>
        <source>zuluCrypt Debug Window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/debugwindow.ui" line="26"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/debugwindow.ui" line="39"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>dialogok</name>
    <message>
        <location filename="../../zuluCrypt-gui/dialogok.ui" line="17"/>
        <source>Dialog</source>
        <translation>نافذة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogok.ui" line="32"/>
        <source>&amp;Ok</source>
        <translation>نعم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogok.ui" line="51"/>
        <source>TextLabel</source>
        <translation>النص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogok.ui" line="70"/>
        <source>&amp;Yes</source>
        <translation>نعم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/dialogok.ui" line="83"/>
        <source>&amp;No</source>
        <translation>لا</translation>
    </message>
</context>
<context>
    <name>erasedevice</name>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="17"/>
        <source>Erase Data On The Device By Writing Random Data Over Them</source>
        <translation>امسح البيانات على القرص بكتابة بيانات عشوائية عليها</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="29"/>
        <source>Path to Device</source>
        <translation>مسار القرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="74"/>
        <source>% Completed</source>
        <translation>%مكتمل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="106"/>
        <source>&amp;Start</source>
        <translation>بداية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="122"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="151"/>
        <source>Average Speed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="170"/>
        <source>ETA</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="199"/>
        <source>N/A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="218"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.ui" line="234"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="45"/>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="96"/>
        <source>Write Random Data Over Existing Data</source>
        <translation>اكتب بيانات عشوائية على البيانات الموجودة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="74"/>
        <source>The next dialog will write random data to a device leading to permanent loss of all contents on the device.

Are you sure you want to continue? </source>
        <translation>النافذة التالية سوف تكتب بيانات عشوائية على القرص مما يؤدي لفقدان محتوى القرص بالكامل.

هل أنت متأكد وترغب في الاستمرار؟</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="78"/>
        <source>WARNING</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="104"/>
        <source>Average Speed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="105"/>
        <source>Total Time:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="106"/>
        <source>Data on the device successfully erased</source>
        <translation>تم مسح البيانات على القرص بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="109"/>
        <source>Could not create mapper</source>
        <translation>لم يمكن إنشاء المخطط</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="110"/>
        <source>Could not resolve device path</source>
        <translation>لم يمكن معرفة مسار القرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="111"/>
        <source>Random data successfully written</source>
        <translation>تمت كتابة بيانات عشوائية بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="113"/>
        <source>Operation terminated per user choice</source>
        <translation>المستخدم أنهى العملية باختياره</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="114"/>
        <source>Can not write on a device with opened mapper</source>
        <translation>لم يمكن الكتابة على القرص بينما المخطط مفتوح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="115"/>
        <source>Policy prevents non root user opening mapper on system partition</source>
        <translation>سياسة الاستخدام تمنع غير المستخدم المدير من فتح مخطط قسم النظام</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="117"/>
        <source>Device path is invalid</source>
        <translation>مسار القرص غير صحيح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="118"/>
        <source>Passphrase file does not exist</source>
        <translation>ملف كلمة السر غير موجود</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="119"/>
        <source>Could not get enought memory to hold the key file</source>
        <translation>لم يمكن تحديد ذاكرة كافية لاستيعاب ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="120"/>
        <source>Insufficient privilege to open key file for reading</source>
        <translation>صلاحيات غير كافية لفتح ملف المفتاح لققراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="121"/>
        <source>This device appear to already be in use</source>
        <translation>القرص يبدو مشغولا من قبل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="122"/>
        <source>Can not open a mapper on a mounted device</source>
        <translation>لم يمكن فتح المخطط للقرص المحمل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="123"/>
        <source>Could not write to the device</source>
        <translation>لم يمكن الكتابة على القرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="143"/>
        <source>Device path field is empty</source>
        <translation>حقل مسار القرص فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="150"/>
        <source>Invalid path to device</source>
        <translation>مسار القرص غير صحيح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="155"/>
        <source>Are you really sure you want to write random data to &quot;%1&quot; effectively destroying all contents in it?</source>
        <translation>هل فعلا تريد كتابة بيانات عشوائية على &quot;1%&quot;. عمليا سوف تدمر محتواه؟</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="158"/>
        <source>WARNING!</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="168"/>
        <source>Failed to enable polkit support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="172"/>
        <source>Writing Random Data Over Existing Data</source>
        <translation>كتبة بيانات عشوائية على البيانات الموجودة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="248"/>
        <source>Enter Path To Volume To Be Erased</source>
        <translation>أدخل مسار القرص المراد مسحه</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/erasedevice.cpp" line="254"/>
        <source>Select A Non System Partition To Erase Its Contents</source>
        <translation>اختر قسما غير قسم النظام لمسح محتواه</translation>
    </message>
</context>
<context>
    <name>fileManager</name>
    <message>
        <location filename="../../zuluCrypt-gui/filemanager.ui" line="14"/>
        <source>Set File Manager</source>
        <translation>عين مدير الملفات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/filemanager.ui" line="26"/>
        <source>TextLabel</source>
        <translation>النص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/filemanager.ui" line="55"/>
        <source>&amp;Set</source>
        <translation>عين</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/filemanager.cpp" line="36"/>
        <source>Enter Below The Name Of The Application You Want To Be Used To Open Mount Points.</source>
        <translation>أدخل بالأسفل اسم التطبيق الذي تود استخدامه لفتح نفطة التحميل</translation>
    </message>
</context>
<context>
    <name>help</name>
    <message>
        <location filename="../../zuluCrypt-gui/help.ui" line="14"/>
        <source>Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/help.ui" line="26"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/help.ui" line="54"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Noto Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:12pt;&quot;&gt;ZuluCrypt is a simple, feature rich and powerful solution for hard drives encryption for linux.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:12pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluCrypt supports LUKS, TrueCrypt, VeraCrypt and PLAIN dm-crypt encrypted volumes.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;These supported encrypted volumes may resides in image files, hard drives and usb sticks, LVM&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;volumes as well as in mdraid devices.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;There are two kinds of encrypted volumes. Those that use what is commonly know as “a header” and&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;those that do not. TrueCrypt, VeraCry and LUKS volumes use a header. PLAIN dm-crypt volumes do&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;not use a header.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;LUKS,TrueCrypt and VeraCrypt based encrypted volumes have what is called a &amp;quot;volume header&amp;quot;.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;A volume header is responsible for storing information necessary to open a header using encrypted volume and any damage to it will makes it impossible to open the volume causing permanent loss of encrypted data.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;The damage to the header is usually caused by accidental formatting of the device or use of&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;some buggy partitioning tools or wrongly reassembled logical volumes.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Having a backup of the volume header is strongly advised because it is the only way the encrypted data will be accessible again after the header is restored if the header on the volume get corrupted.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Hack&apos;; color:#008000;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;There are two kinds of header using encrypted volumes. Those that use an encrypted header and those&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;that do not. TrueCrypt and VeraCrypt use an encrypted header whereas LUKS does not. The use of non&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;encrypted header in LUKS makes it obvious to everybody that the volume is an encrypted LUKS&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;volume and this may be problematic to some people. How big the problem may be depends on the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;person and their use case for hard drive encryption.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The use of encrypted header as in TrueCrypt or VeraCrypt volumes or no header at all as in PLAIN dm-&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;crypt volumes make these volumes indistinguishable from random noise and this may seem useful at a&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;glance but its usefulness may not hold up against scrutiny as the likelihood of being believed that a&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;100GB file made up of cryptographically sound random data is just a 100GB file made up of random&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;data and not a container file for an encrypted volume is not very high.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;With LUKS, TrueCrypt and VeraCrypt volumes, it is very important to have a volume header backup&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;since a valid header is required to unlock the volume. A corrupted or missing header will make the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;volume unusable causing the loss of all encrypted data.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;LUKS stands for “Linux Unified Key Setup”. It is a specification of how to store information necessary&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;to open a LUKS formatted encryption volume. LUKS encryption format is the standard format in linux&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;and a recommended one if the encrypted volume is to be used among linux systems. TrueCrypt or&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;VeraCrypt volumes are better alternative if the encrypted volume is to be shared between linux,&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;windows and OSX computers.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluCrypt can create and open 5 types of encrypted volumes, LUKS, TrueCrypt, VeraCrypt,PLAIN&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;dm-crypt and PLAIN dm-crypt volume at a none zero offset. PLAIN dmcrypt volume is a header less&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;encrypted volume and all necessary encryption information is provided by zuluCrypt when it creates or&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;open these volumes.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:12pt; text-decoration: underline;&quot;&gt;Pros and cons of the five volumes.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:12pt; text-decoration: underline;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;PLAIN dm-crypt:&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Pro:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. It does not use a volume header and hence its not possible to “brick” the entire volume simply by&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;over writing a small part of it.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. It does not use a header and hence its impossible to know if the volume is made up of only&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;cryptographically sound random data or if its an encrypted volume.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Cons:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;It does not use a header and hence any tool that opens these volumes must provide the encryption&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;options that were used when the volume was created. Different tools may use different encryption&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;options making these encrypted volumes not very portable between applications or even between&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;different versions of the same application.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;PLAIN dm-crypt at a none zero offset.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This volume has the same pros and cons as those of a PLAIN dm-crypt volume.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Additional pro for this volume is that it can be places anywhere on the device making it possible&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;to have this volume on top of any one of the other supported encrypted volume or on top of an&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;unencrypted volume.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;For example, its possible to have an X MB drive that has unencrypted file system&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;at the beginning of the device and a “PLAIN dm-crypt volume with an offset” somewhere towards the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;end of the device making it possible to use the drive as unencrypted volume and as encrypted volume&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;simultaneously depending on sensitivity of the data to be stored on the device.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;If this volume type is to be used, preceding part of the drive should be formatted in “FAT” family of file systems.This volume types gives a “hidden volume” type functionality offered by TrueCrypt and VeraCrypt. When creating or unlocking this volume type, the starting offset of the volume will be asked and NOT the volume size as TrueCrypt and VeraCrypt does with the hidden volume.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The above means, if you have a 100 MB drive and you want to create a 30MB “PLAIN dm-crypt&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;volume at a none zero offset”, you will enter the starting offset of the volume as 70MB. In VeraCrypt or&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;TrueCrypt, you will enter the hidden volume size of 30MB. The starting offset and the size of the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;hidden volume are related by a simple formula: starting offset(70MB) = device size(100MB) – hidden&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;volume size(30MB).&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;TrueCrypt&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Pro:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. It uses an encrypted header and hence its not possible to know if the volume is TrueCrypt formatted&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;encrypted volume or if the volume is just made up of cryptographically sound random data.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. Hidden volume. A TrueCrypt volume can have up to two different encrypted volumes. The first&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;volume is commonly know as “outer volume” and the second optional one is commonly known as&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;“hidden volume”.When a TrueCrypt volume is about to be opened, the user has an option to select&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;which one of the two to open by giving appropriate key.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Cons:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. It uses an encrypted header and it is not possible to open the volume without a valid header. If you&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;use a TrueCrypt volume, make sure you have at least one backup of the volume header.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;VeraCrypt&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;VeraCrypt is an extension of TrueCrypt and it shares the same TrueCrypt’s pros and cons.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Additional Pro for VeraCrypt over TrueCrypt.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. It requires stronger effort to unlock VeraCrypt volume and this makes them more secure over&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;TrueCrypt volumes.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Additional Cons for VeraCrypt over TrueCrypt.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. It requires stronger effort to unlock a VeraCrypt volume and this increases the time it takes to unlock&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;a VeraCrypt volume. How long it will take depends on the strength of the computer and it may vary&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;from a few seconds to several minutes.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;LUKS&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Pro:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. A LUKS volume can be opened with up to 8 different keys.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Cons:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. A LUKS header is stored unencrypted making it obvious the volume is LUKS formatted encrypted&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;volume and this may not be desirable under certain circumstances. It is possible to create a LUKS&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;volume with a detached header and zuluCrypt can open these volumes using “luks” plugin.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. It uses a header. As it is not possible to open a header using encrypted volume without its header, a&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;corrupted LUKS header makes it impossible to open the volume. If you use a LUKS volume, make&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;sure you have at least one backup of the volume header.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluCrypt can do two types of encryption. It can do single file encryption/decryption or block device&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;encryption.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;File encryption.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluCrypt can encrypt and decrypt individual files. This feature is useful when a user just wants to&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;encrypt a single file and taking the route of creating an encrypted container file to host the file is seen&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;as an unnecessary hassle. This functionality is akin to file encryption using gpg with a symmetric key.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;File encryption is done using libgcrypt as a cryptographic backend. Files are encrypted using 256 bit&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;AES in CBC mode. &lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The encryption key is derived from user pass phrase using pbkdf2 with 10,000&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;rounds of iterations and sha2 as a cryptographic hash function. The resulting encrypted file will have a&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;file size that equals (64 + 1024 * n) bytes where n is a number starting from zero.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;How to create an encrypted file:&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. Start zuluCrypt.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. Go to the menu and then click “zC-&amp;gt;encrypt a file” to open a file encryption dialog window.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;3. At the dialog that will show up, click the button that is on the same line as “source path” text. A file&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;dialog will show up, select the file you want to store encrypted, enter the password to be used to&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;encrypt the file and then click “create” and the encrypted version of the file will be created at the path&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;given by “destination path” field.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;To decrypt the file created with above steps:&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. Start zuluCrypt.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. Go to the menu and then click “zC-&amp;gt;decrypt a file” to open a file decryption dialog window.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;3. At the dialog that will show up, click the button that is on the same line as “source path” text. A file&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;dialog will show up, select the file you want to decrypt, enter the password to be used to decrypt the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;file and then click “create” and the decrypted version of the file will be created at the path given by&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;“destination path” field.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Block device encryption.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;A hard drive or a usb stick are two examples of block devices. A regular file can simulate a block&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;device through a use of devices known as “loop devices”. These devices have a device path that starts&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;with “/dev/loop”.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The infrastructure in the linux kernel that deal with block device encryption is called “dm-crypt” and it&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;does its work through a process commonly known as OTF(on the file encryption). Dm-crypt devices&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;are represented by device addresses that starts with “/dev/dm-” and these paths are usually accessed&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;through their soft links that reside in “/dev/mapper”.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Below is an example of steps taken in creating a 100MB encrypted container in a file and adding a file&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;in it to be stored securely.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. Create a 100MB file.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. Attach a loop device to the file.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;3. Create an OTF encryption mapper against the loop device.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;4. Put a file system on the encryption mapper.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;5. Mount the file system on the mapper.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;6. Copy The file to be stored securely to the file system through the mount point.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;7. Unmount the file system.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;8. Destroy the OTF encryption mapper.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;9. Detach the loop device from the file.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;10. Maintain the encrypted volume as a secure holder of files within it.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;All zuluCrypt does is provide a GUI to make it easy to do above specified tasks.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;With the above steps:&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Step 1 deal with a path that look like “/home/ink/secret.img”, this is a path to a regular file.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Step 2 converts “/home/ink/secret.img” file to something like “/dev/loop0” loop device path.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Step 3 converts “/dev/loop0” loop device path to something like “/dev/mapper/secrets.img”. Data&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;written to “/dev/mapper/secrets.img” will get encrypted and then passed forward to “/dev/loop0” on its&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;way to “/home/ink/secret.img”. When data is read from “/dev/mapper/secrets.img”, the data will be&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;read from “/dev/loop0” who in turn will read it from “/home/ink/secret.img”, decrypted by dm-crypt&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;and then given to the reader. This process is called “on the fly encryption” because the encryption&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;mapper does not store or hold on to data, it gets data and then encrypts or decrypts it depending on the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;direction of data flow and then passes it along.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;How to create an encrypted container in an image file.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. Start zuluCrypt.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. Go to “menu-&amp;gt;create-&amp;gt;encrypted container in a file” to open a dialog window.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;3. Enter the name of the file to be used to hold the container in the “file name” field.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;4. Enter the size of the container in the “file size” field.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;5. Click “create”.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;6. Wait for the container file to be created and for the volume creation dialog to show up.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;7. Enter the password to be used to create the volume.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;8. Select the type of volume you want to create from the “volume type” list.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;9. Click create to create the volume.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;How to create an encrypted container in a partition.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. Start zuluCrypt.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. Go to “menu-&amp;gt;create-&amp;gt;encrypted container in a hard drive” to open a dialog window.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;3. Click/double click on the hard drive you want to create a volume in and then advance to instruction&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;number 7 in the instruction list above. If the partition you want to put an encrypted container does not&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;show up on the list, then restart zuluCrypt from root&apos;s account and try again.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;How to open an encrypted container that reside in a file using zuluCrypt.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. Start zuluCrypt.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. Go to “menu-&amp;gt;open-&amp;gt;encrypted container in a file” to bring up a dialog window.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;3. On the dialog window, click the button to the right of “volume path” field and then browse to where&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;the volume is and click it to open it. Alternatively, you can just drag the volume file on zuluCrypt to&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;generate a password dialog prompt with the file path already filled in.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;4. Enter the volume key in the volume key field and then click “open” to open the volume.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;How to open an encrypted container that reside in a partition using zuluCrypt.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;1. Start zuluCrypt.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;2. Go to “menu-&amp;gt;open-&amp;gt;encrypted container in a partition” to bring up a dialog window.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;3. On the dialog window, click/double click on the partition with an encrypted volume you want to&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;open.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;4. Enter the volume key in the volume key field and then click “open” to open the volume.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;With both two steps above, the volume will be opened and mounted at a path whose last component is&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;given by the entry in the field “mount name”. &lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;When the volume is successfully opened, zuluCrypt will&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;automatically open the mount point path. To close the volume, click its entry on the zuluCrypt window&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;and then click “close” on the pop up window.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluCrypt can open an encrypted volume using keys derived from different sources. These sources&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;include, a pass phrase, a key file, a key retrieved from kwallet, a key retrieved from Gnome&apos;s libsecret,&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;a key retrieved from an internal secure storage system, a key from gpg encrypted key file among other&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;sources.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;To use a pass phrase volume key, make sure the key source option read “key” and then enter the pass&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;phrase on the entry field at the bottom.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;To use a keyfile as the source of volume key, click the option bar and then select “keyfile” and then&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;press the button on the lower right to bring a dialog box that will allow you to browse to where the key&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;file is.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;To use a plugin as the source of volume key, click the option bar and then select “plugin” and then&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;press the button on the lower right to bring up a list of available plugins and then select the one you&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;want from the list.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Volume keys stored in kwallet, Gnome keyring or internal secure storage system plugins can be&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;managed by going to “menu-&amp;gt;options-&amp;gt;manage volumes in internal/kde/gnome wallet”.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Storage of keys in a gnome wallet/keyring seem most appropriate in a gnome session but this has some security repercussions, the keys are stored in the user keyring and this keyring gets unlocked when the user logs in. This means that once a user is logged in and the keyring is open, any application that runs in that user session can read those keys using public APIs exposed by the storage system.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;In a kde system, a kwallet secure storage system seem most appropriate but it suffers from the same&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;security problem the gnome secure storage system has, once the wallet is open, any application running in the user session can access it using public APIs exposed by the storage system.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The behaviors of the above secure storage systems is by design but this design may not be ideal for&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;some users under certain use cases. The internal secure storage system is powered by libgcrypt and it&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;does not have the behavior of the above two systems. An unlocked internal secured storage system is&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;accessible only to the instance of zuluCrypt that unlocked it.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Favorites.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;For convenience, most used volumes can be easily opened by adding them to the favorite list. Entries&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;on the list are added in the dialog window opened by clicking “menu-&amp;gt;options-&amp;gt;manage favorites”.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Favorite entries are added by clicking the “favorite” entry on the menu.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Erase data in a device.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;It is very important to create encrypted volume over cryptographically strong random data to make it&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;impossible to know what part of the encrypted volume has been used and what part has not. If the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;encrypted volume is created over predictable data patterns like on a device with only zeros in it,&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;forensic analysis may reveal how much and what part of the encrypted volume are in use.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;When creating an encrypted container in a device, zuluCrypt offers an option to first write random data&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;over the device. This feature can be performed on other devices by activating it through “menu-&amp;gt;erase&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;data in a device”. Random data are written to disk by opening a plain dm-crypt encryption mapper on&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;the device with a 64 byte random key and then blasting zeros on the device through the mapper. This&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;technique has proven to be faster compared to alternatives like writing random data on the device read&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;from “/dev/urandom”.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;System and non system volumes.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;To enforce access controls on what user can access what block device and what they can do with the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;access they have, zuluCrypt employes a concept of “system volumes” and “non system volumes”.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;A system volume is defined as a volume that has an active entry in&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;“/etc/fstab”,”/etc/crypptab”,“/etc/zuluCrypt/system_volumes.list” or if udev identify it as such if udev&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;is enabled. Ideally, all volumes inside the computer are to be considers system volumes.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;A non system volume is a volume that failed in the above considerations or if it has an entry in&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;“/etc/zuluCrypt/non_system_volumes.list”. Ideally, these volumes are plug gable usb based hard drives&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;or usb sticks.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Partitions can be added or removed from the list of system or non system volumes simply by starting&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;zuluCrypt from root&apos;s account and then going to “menu-&amp;gt;options-&amp;gt;manage system volumes/manage&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;non system volumes” and then adding the volume in the appropriate list.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Permissions.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluCrypt limits what a user can do on block devices through unix&apos;s group based permission system&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;using two groups, “zulucrypt” and “zulumount”.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;If a device is identified as a system device, only a root user or a user who is a member of group&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;“zulucrypt” can create an encrypted volume in the device or taking/restoring volume headers. If you&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;want to create a volume in a device and the device does not show up on the list, restart zuluCrypt from&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;root&apos;s account and try again.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;If a device is identified as a system device, zuluMount will mount it only if the user is root, is a&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;member of group “zulumount” or the device has an entry in “/etc/fstab” with either “user” or “users”&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;mount options set.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;ZuluMount.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluMount is a general purpose mounting tool that can open zuluCrypt supported encrypted volumes&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;as well as non encrypted volumes.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluMount can also auto detect plugged in devices and auto mount them.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ZuluMount can also unlock encfs volumes.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Copyright (c) 2015-2017 Francis Banyikwa, mhogomchungu@gmail.com&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/help.ui" line="389"/>
        <source>Open &amp;PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/help.cpp" line="62"/>
        <source>WARNING!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/help.cpp" line="63"/>
        <source>Failed to open zuluCrypt.pdf,make sure your system can open pdf files using &quot;%1&quot; tool and try again</source>
        <translation type="unfinished">فشل في فتح ملف ZuluCrypt.pdf، تأكد أن النظام يستطيع فتح ملف PDF باستخدام أداة &quot;1%&quot; ثم حاول مرة أخرى</translation>
    </message>
</context>
<context>
    <name>luksaddkey</name>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="20"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="147"/>
        <source>Add A Key To A Volume</source>
        <translation>أضف مفتاحا للمجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="35"/>
        <source>Volume Path</source>
        <translation>مسار المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="54"/>
        <source>open file</source>
        <translation>افتح الملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="70"/>
        <source>open partition</source>
        <translation>افتح القسم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="324"/>
        <source>Advanced LUKS2 Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="374"/>
        <source>LUKS</source>
        <translation>لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="379"/>
        <source>TrueCrypt</source>
        <translation>ترو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="384"/>
        <source>VeraCrypt</source>
        <translation>فيرا كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="398"/>
        <source>Volume Type</source>
        <translation>نوع المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="430"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="255"/>
        <source>PIM</source>
        <translation>PIM</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="452"/>
        <source>TextLabel</source>
        <translation>النص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="512"/>
        <source>Advanced Luks2 Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="531"/>
        <source>Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="563"/>
        <source>Pbkdf Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="580"/>
        <source>argon2id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="585"/>
        <source>argon2i</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="590"/>
        <source>pbkdf2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="604"/>
        <source>Max Memory (KB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="623"/>
        <source>Parallel Threads</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="672"/>
        <source>Unlocking Time Cost(Milliseconds)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="701"/>
        <source>Forced Iterations
(Dangerous And Could Lead To Extremely Long Unlocking Time)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="731"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="198"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="305"/>
        <source>open keyfile</source>
        <translation>افتح ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="134"/>
        <source>Password Already In The Encrypted Volume</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="150"/>
        <source> Password To Be Added To The Encrypted Volume</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="179"/>
        <source>Reenter Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="227"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="247"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="286"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="344"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="269"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="322"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="252"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="349"/>
        <source>KeyFile</source>
        <translation>ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="257"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="354"/>
        <source>Key+KeyFile</source>
        <translation>مفتاح+ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="262"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="359"/>
        <source>YubiKey Challenge/Response</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="471"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="86"/>
        <source>&amp;Add</source>
        <translation>أضف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="105"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="156"/>
        <source>Passphrase Quality: 0%</source>
        <translation>جودة كلمة السر: 0%</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="158"/>
        <source>Passphrase Quality: %1%</source>
        <translation>جودة كلمة السر: 1%</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.ui" line="544"/>
        <source>Key Slot Number To Add Key In</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="266"/>
        <source>Enter A Key</source>
        <translation>أدخل مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="282"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="340"/>
        <source>Enter a path to a keyfile location</source>
        <translation>أدخل مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="285"/>
        <source>KeyFile Path</source>
        <translation>مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="319"/>
        <source>Enter a key</source>
        <translation>أدخل مفتاحا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="343"/>
        <source>KeyFile path</source>
        <translation>أدخل مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="369"/>
        <source>Passphrase Quality: 100%</source>
        <translation>جودة كلمة السر: 100%</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="384"/>
        <source>Existing KeyFile</source>
        <translation>ملف المفتاح الموجود</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="396"/>
        <source>New KeyFile</source>
        <translation>ملف المفتاح الجديد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="408"/>
        <source>Encrypted Volume Path</source>
        <translation>مسار المجلد المشفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="450"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="459"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="467"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="475"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="482"/>
        <source>ERROR!</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="450"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="467"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="475"/>
        <source>Atleast one required field is empty</source>
        <translation>حقل واحد مطلوب على الأقل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="459"/>
        <source>Failed to enable polkit support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="482"/>
        <source>Keys do not match</source>
        <translation>المفاتيح لا تتطابق</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="511"/>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="542"/>
        <source>Failed To Locate Or Run Yubikey&apos;s &quot;ykchalresp&quot; Program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="643"/>
        <source>Key added successfully.</source>
        <translation>المفتاح أضيف بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="645"/>
        <source>Key added successfully.
%1 / %2 slots are now in use</source>
        <translation>المفتاح أضيف بنجاح. المنافذ 1% 2% الآن قيد الاستخدام</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="660"/>
        <source>Presented key does not match any key in the volume</source>
        <translation>المفتاح المخل لا يتطابق مع مفتاح المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="661"/>
        <source>Could not open luks volume</source>
        <translation>لم يمكن فتح مجلد لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="662"/>
        <source>Volume is not a luks volume</source>
        <translation>المجلد ليس مجلد لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="663"/>
        <source>Insufficient privilege to add a key to a system device,
only root user or members of group &quot;zulucrypt&quot; can do that
</source>
        <translation>صلاحيات غير كافية لإضافة مفتاح لقرص النظام.
المستخدم المدير وأعضاء مجموعة زولوكربت فقط يستطيعون ذلك.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="664"/>
        <source>Could not open volume in write mode</source>
        <translation>لا يمكن فتح المجلد للكتابة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="665"/>
        <source>All key slots are occupied, can not add any more keys</source>
        <translation>كل منافذ المفاتيح مشغولة. لا يمكن إضافة مفاتيح.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="666"/>
        <source>Can not get passphrase in silent mode</source>
        <translation>لا يمكن الحصول على كلمة السر في الطور الصامت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="667"/>
        <source>Insufficient memory to hold passphrase</source>
        <translation>ذاكرة غير كافية لاستيعاب كلمة السر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="668"/>
        <source>New passphrases do not match</source>
        <translation>كلمات السر الجديدة لا تتطابق</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="669"/>
        <source>One or more required argument(s) for this operation is missing</source>
        <translation>معطى أو أكثرمطلوب غير متوفر لهذه العملية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="670"/>
        <source>One or both keyfile(s) does not exist</source>
        <translation>ملف مفتاح أو كلا ملفي مفتاح غير موجود</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="671"/>
        <source>Insufficient privilege to open key file for reading</source>
        <translation>ذاكرة غير كافية لفتح ملف المفتاح للقراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="672"/>
        <source>Couldnt get enought memory to hold the key file</source>
        <translation>لم يمكن الحصول على ذاكرة كافية لاستيعاب ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="673"/>
        <source>Could not get a key from a socket</source>
        <translation>لم يمكن الحصول على مفتاح من المنفذ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="674"/>
        <source>Could not get elevated privilege,check binary permissions</source>
        <translation>لم يمكن ترقية الصلاحية. تأكد من الأذونات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="675"/>
        <source>Key slot already occupied</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="676"/>
        <source>Failed to find empty key slot or key slot out of range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="677"/>
        <source>Can not find a partition that match presented UUID</source>
        <translation>لم يمكن العثور على قسم بنفس الرقم المعطى</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="678"/>
        <source>Device is not a luks device</source>
        <translation>القرص ليس قرص لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksaddkey.cpp" line="679"/>
        <source>Error Code: %1
--
StdOut: %2
--
StdError: %3</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>luksdeletekey</name>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="20"/>
        <source>Remove A Key From A Volume</source>
        <translation>احذف مفتاح من المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="45"/>
        <source>LUKS Slot Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="74"/>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="218"/>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="95"/>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="153"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="93"/>
        <source>open a keyfile</source>
        <translation>افتح ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="112"/>
        <source>&amp;Delete</source>
        <translation>امسح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="131"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="160"/>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="372"/>
        <source>Volume Path</source>
        <translation>مسار المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="179"/>
        <source>open an encrypted file</source>
        <translation>افتح ملفا مشفرا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="198"/>
        <source>open an encrypted partition</source>
        <translation>افتح قسما مشفرا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="245"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="264"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="223"/>
        <source>KeyFile</source>
        <translation>ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.ui" line="228"/>
        <source>Key+KeyFIle</source>
        <translation>مفتاح+ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="94"/>
        <source>Enter a key</source>
        <translation>أدخل مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="110"/>
        <source>Enter a path to a keyfile location</source>
        <translation>أدخل مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="111"/>
        <source>KeyFile path</source>
        <translation>مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="137"/>
        <source>Key File With A Passphrase To Delete</source>
        <translation>مسح ملف مفتاح بكلمة سر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="245"/>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="251"/>
        <source>ERROR!</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="245"/>
        <source>Atleast one required field is empty</source>
        <translation>حقل واحد مطلوب على الأقل فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="251"/>
        <source>Failed to enable polkit support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="267"/>
        <source>Volume is not a luks volume</source>
        <translation>المجلد ليس مجلد لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="273"/>
        <source>There is only one last key in the volume.</source>
        <translation>يوجد مفتاح أخير فقط بالمجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="274"/>
        <source>
Deleting it will make the volume unopenable and lost forever.</source>
        <translation>بمسحه يستحيل فتح المجلد وسيفقد للأبد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="275"/>
        <source>
Are you sure you want to delete this key?</source>
        <translation>هل متأكد أنك تريد مسح المفتاح؟</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="277"/>
        <source>WARNING</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="340"/>
        <source>Key removed successfully.
%1 / %2 slots are now in use</source>
        <translation>المفتاح تم مسحه بنجاح
المنافذ 1% 2% الآن مشغولة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="64"/>
        <source>YubiKey Challenge/Response</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="66"/>
        <source>zuluCrypt will have the same behavious as luksKillSlot if a key slot is given</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="67"/>
        <source>zuluCrypt will have the same behavious as luksRemoveKey if a key slot is NOT given</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="311"/>
        <source>Failed To Locate Or Run Yubikey&apos;s &quot;ykchalresp&quot; Program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="343"/>
        <source>There is no key in the volume that match the presented key</source>
        <translation>المفتاح لا يطابق أيا من مفاتيح المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="344"/>
        <source>Could not open the volume</source>
        <translation>لم يمكن فتح المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="345"/>
        <source>Insufficient privilege to open a system device,only root user or members of group zulucrypt can do that</source>
        <translation>صلاحيات غير كافية لفتح قرص النظام. فقط المستخدم المدير وأعضاء مجموعة زولوكربت بإمكانهم ذلك</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="347"/>
        <source>Could not open the volume in write mode</source>
        <translation>لم يمكن فتح المجلد للقراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="348"/>
        <source>Insufficient memory to hold your response</source>
        <translation>ذاكرة غير كافية لاستيعاب ردك</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="349"/>
        <source>Operation terminated per user request</source>
        <translation>العملية تم إلغؤها من طرف المستخدم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="350"/>
        <source>Can not get passphrase in silent mode</source>
        <translation>لم يمكن الحصول على كلمة السر في الطور الصامت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="351"/>
        <source>Insufficient memory to hold passphrase</source>
        <translation>ذاكرة غير كافية لاستيعاب كلمة السر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="352"/>
        <source>One or more required argument(s) for this operation is missing</source>
        <translation>معطى مطلوب أو أكثر لم يتوفر لهذه العملية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="353"/>
        <source>Keyfile does not exist</source>
        <translation>ملف مفتاح غير موجود</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="354"/>
        <source>Could not get enough memory to open the key file</source>
        <translation>لم يمكن الحصول على ذاكرة كافية لاستيعاب ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="355"/>
        <source>Insufficient privilege to open key file for reading</source>
        <translation>صلاحيات غير كافية لفتح ملف المفتاح للقراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="356"/>
        <source>Could not get a key from a socket</source>
        <translation>لم يمكن الحصول على المفتاح من المنفذ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="357"/>
        <source>Can not find a partition that match presented UUID</source>
        <translation>لم يمكن العثور على قسم بنفس الرقم التعريفي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/luksdeletekey.cpp" line="358"/>
        <source>Error Code: %1
--
StdOut: %2
--
StdError: %3</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>manageSystemVolumes</name>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.ui" line="17"/>
        <source>Manage System Volumes</source>
        <translation>تحكم في مجلد النظام</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.ui" line="32"/>
        <source>&amp;Done</source>
        <translation>تم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.ui" line="51"/>
        <source>Add Fi&amp;le</source>
        <translation>أضف ملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.ui" line="70"/>
        <source>Add Dev&amp;ice</source>
        <translation>أضف قرصا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.ui" line="111"/>
        <source>Path To System Volumes</source>
        <translation>المسار لمجلدات النظام</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.cpp" line="169"/>
        <source>Remove Selected Entry</source>
        <translation>احف البند المختار</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.cpp" line="172"/>
        <source>Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.cpp" line="189"/>
        <source>Are you sure you want to remove 
&quot;%1&quot;
 from the list?</source>
        <translation>هل تريد حف &quot;1%&quot; من القائمة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.cpp" line="193"/>
        <source>WARNING</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managesystemvolumes.cpp" line="217"/>
        <source>Select Path To System Volume</source>
        <translation>اختر مسارل لمجلد  النظام</translation>
    </message>
</context>
<context>
    <name>managevolumeheader</name>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="17"/>
        <source>Backup Volume Header</source>
        <translation>قم بنسخ احتياطي لترويسة الملجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="39"/>
        <source>Backup Name</source>
        <translation>اسم النسخ الاحتياطي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="74"/>
        <source>C&amp;reate</source>
        <translation>إنشاء</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="93"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="112"/>
        <source>Volume Path</source>
        <translation>مسار المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="173"/>
        <source>Window System Volume</source>
        <translation>مسار مجلد نظام ويندوز</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="192"/>
        <source>Volume Type</source>
        <translation>نوع الملجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="235"/>
        <source>Manage A VeraCrypt Header</source>
        <translation>تحكم في ترويسة فيرا كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="249"/>
        <source>PIM</source>
        <translation>PIM</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="292"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="311"/>
        <source>Password Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="330"/>
        <source>Outer Volume Password ONLY</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="297"/>
        <source>KeyFile</source>
        <translation>ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="352"/>
        <source>TextLabel</source>
        <translation>النص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="168"/>
        <source>Normal Volume</source>
        <translation>مجلد عادي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="178"/>
        <source>Whole Drive Encrypted Volume</source>
        <translation>القرص مشفر بالكامل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="225"/>
        <source>Manage A LUKS Header</source>
        <translation>تحكم في ترويسة لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.ui" line="230"/>
        <source>Manage A TrueCrypt Header</source>
        <translation>تحكم في ترويسة ترو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="156"/>
        <source>Restore volume header</source>
        <translation>استرجع ترويسة المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="159"/>
        <source>&amp;Restore</source>
        <translation>استرجع</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="169"/>
        <source>Back up volume header</source>
        <translation>نسخ احتياطي لترويسة المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="172"/>
        <source>&amp;Backup</source>
        <translation>نسخ احتياطي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="243"/>
        <source>Select A File With A LUKS Backup Header</source>
        <translation>اختر ملفا احتياطيا لترويسة لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="250"/>
        <source>Select A Folder To Store The Header</source>
        <translation>اختر مجلدا لحفظ ترويسة المجلد الاحتياطية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="377"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="381"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="394"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="565"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="566"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="567"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="569"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="570"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="571"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="572"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="573"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="574"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="575"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="576"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="577"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="578"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="579"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="580"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="581"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="585"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="587"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="594"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="596"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="600"/>
        <source>ERROR!</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="377"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="381"/>
        <source>Atleast one required field is empty</source>
        <translation>حقل مطلوب على الأقل فارغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="394"/>
        <source>Failed to enable polkit support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="440"/>
        <source>Are you sure you want to replace a header on device &quot;%1&quot; with a backup copy at &quot;%2&quot;?</source>
        <translation>هل تريد استبدال الترويسة على القرص &quot;1%&quot; بترويسة احتياطية في &quot;2%&quot;</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="442"/>
        <source>WARNING!</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="517"/>
        <source>Select luks container you want to backup its header</source>
        <translation>اختر حاوية لوكس التي تريد نسخ ترويستها</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="545"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="547"/>
        <source>SUCCESS</source>
        <translation>نجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="545"/>
        <source>Header saved successfully.
If possible,store it securely.</source>
        <translation>الترويسة حفظ بنجاح.
إذا امكن، خزنها بأمان.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="547"/>
        <source>Header restored successfully</source>
        <translation>تم استعادة الترويسة بنجاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="565"/>
        <source>Presented device is not a LUKS device</source>
        <translation>القرص ليس قرص لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="566"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="567"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="570"/>
        <source>Failed to perform requested operation</source>
        <translation>فشل في تنفيذ العملية المطلوبة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="568"/>
        <source>INFO!</source>
        <translation>معلومات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="568"/>
        <source>Operation terminater per user request</source>
        <translation>المستخدم قام بإلغاء العملية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="569"/>
        <source>Path to be used to create a back up file is occupied</source>
        <translation>المسار المفترض استخامه لنسخ الملف غير شاغر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="571"/>
        <source>Insufficient privilege to open backup header file for reading</source>
        <translation>صلاحيات غير كافية لفتح ترويسة الملف للقراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="572"/>
        <source>Invalid path to back up header file</source>
        <translation>مسار غير صحيح لنسخ ملف الترويسة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="573"/>
        <source>Insufficient privilege to create a backup header in a destination folder</source>
        <translation>صلاحيات غير كافية لنسخ ترويسة الملف في المجلد المستهدف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="574"/>
        <source>Invalid path to device</source>
        <translation>مسار غير صحيح للمجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="575"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="576"/>
        <source>Argument for path to a backup  header file is missing</source>
        <translation>معطى مطلوب لمسار نسخ ترويسة الملف غير متوفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="577"/>
        <source>Only root user and &quot;zulucrypt&quot; members can restore and back up luks headers on system devices</source>
        <translation>فقط المستخدم المدير وأعضاء مجموعة زولو كربت يمكنهم استرجاع ونسخ احتياطي لترويسة لوكس على قرص نظام</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="578"/>
        <source>Insufficient privilege to open device for writing</source>
        <translation>صلاحيات غير كافية لفتح القرص للكتابة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="579"/>
        <source>Could not resolve path to device</source>
        <translation>لم يمكن معرفة مسار القرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="580"/>
        <source>Backup file does not appear to contain luks header</source>
        <translation>الترويسة الاحتياطية لا تبدو أنها تحوي ترويسة لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="581"/>
        <source>Insufficient privilege to open device for reading</source>
        <translation>صلاحيات غير كافية لفتح القرص للقراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="585"/>
        <source>Wrong password entered or volume is not a truecrypt volume</source>
        <translation>كلمة سر غير صحيحة أو أن المجلد ليس مجلد ترو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="587"/>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="596"/>
        <source>Failed to perform requested operation on the LUKS volume</source>
        <translation>فشل في تنفيذ العملية المطلوبة على مجلد لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="594"/>
        <source>Wrong password entered or volume is not a veracrypt volume</source>
        <translation>كلمة سر غير صحيحة أو أن المجلد ليس مجلد فيرا كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/managevolumeheader.cpp" line="600"/>
        <source>Unrecognized ERROR! with status number %1 encountered</source>
        <translation>خطأ غير معروف. رقم الحالة 1%</translation>
    </message>
</context>
<context>
    <name>oneinstance</name>
    <message>
        <location filename="../../zuluMount-gui/oneinstance.cpp" line="73"/>
        <source>Previous instance seem to have crashed,trying to clean up before starting</source>
        <translation>البرنامج تم تشغيله من قبل وتعطل. حاول التنظيف ثم إبدأ من جديد</translation>
    </message>
    <message>
        <location filename="../../zuluMount-gui/oneinstance.cpp" line="80"/>
        <source>There seem to be another instance running,exiting this one</source>
        <translation>يبدو هناك نسخة أخرى من البرنامج تعمل آنيا. أخرج من البرنامج</translation>
    </message>
</context>
<context>
    <name>openvolume</name>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="17"/>
        <source>Select A Partition To Open</source>
        <translation>اختر قسما لفتحه</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="35"/>
        <source>Use UUID</source>
        <translation>استخدم الرقم التعريفي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="48"/>
        <source>&amp;Help</source>
        <translation>مساعدة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="64"/>
        <source>Use &amp;UUID</source>
        <translation>استخدم الرقم التعريفي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="80"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="142"/>
        <source>partition</source>
        <translation>قسم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="150"/>
        <source>size</source>
        <translation>حجم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="158"/>
        <source>label</source>
        <translation>ملصق</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="166"/>
        <source>type</source>
        <translation>نوع</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="174"/>
        <source>uuid</source>
        <translation>رقم تعريفي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.ui" line="192"/>
        <source>&amp;Open</source>
        <translation>افتح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.cpp" line="125"/>
        <source>A list of all partitions on this system are displayed here.
Double click an entry to use it</source>
        <translation>قائمة بكل الأقسام على النظام تعرض هنا.
انقر مضاعفا على واحد لاستخدامه</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.cpp" line="129"/>
        <source>Restart the tool from root&apos;s account or after you have created and added yourself to group &quot;zulucrypt&quot; if the volume you want to use is not on the list.</source>
        <translation>أعد تشغيل البرنامج بصلاحية مدير أو بعد أن تضيف نفسك لمجموعة زولو كربت إذا كان المجلد الذي تريد استخدامه ليس على القائمة.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.cpp" line="131"/>
        <source>You are a root user and all partitions are displayed.
Double click an entry to use it</source>
        <translation>أنت مستخدم مدير، كل الأقسام على النظام تعرض هنا.
انقر مضاعفا على واحد لاستخدامه</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.cpp" line="135"/>
        <source>INFO</source>
        <translation>معلومات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.cpp" line="173"/>
        <source>Select A Partition To Create An Encrypted Volume In</source>
        <translation>اختر قسما لإنشاء مجلد مشفر عليه</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.cpp" line="194"/>
        <source>Select An Encrypted Partition To Open</source>
        <translation>اختر قسما مشفرا لفتحه</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.cpp" line="342"/>
        <source>ERROR</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/openvolume.cpp" line="342"/>
        <source>Only crypto_LUKS volumes can be selected</source>
        <translation>يمكن اختيار مجلدات كربتو لوكس فقط</translation>
    </message>
</context>
<context>
    <name>passwordDialog</name>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="120"/>
        <source>TrueCrypt/VeraCrypt Keys</source>
        <translation>مفاتيح فيرا كربت/ترو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="122"/>
        <source>YubiKey Challenge/Response</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="181"/>
        <source>Check This Box To Make Password Visible</source>
        <translation>فعل هذا الخيار لجعل كلمة السر ظاهرة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="183"/>
        <source>Unlock Encrypted Volume</source>
        <translation>فك تشفير المجلد المشفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="216"/>
        <source>PIM Value</source>
        <translation>قيمة PIM</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="229"/>
        <source>Offset</source>
        <translation>الإزاحة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="231"/>
        <source>Offset Will Be In Sectors If The Entry Is Made Up Of Only Digits
And In Bytes If The Entry Ends With &quot;b&quot;
And In Kilobytes If The Entry Ends With &quot;k&quot;
And In Megabytes If The Entry Ends With &quot;m&quot;
And In Terabytes If The Entry Ends With &quot;t&quot;</source>
        <translation>سوف تظهر الإزاحة بالسكتور إذا كتبت القيمة بالأرقام فقط
و بالبايت إذا كانت نهاية الإدخال &quot;b&quot;
و بالكيلو بايت إذا كانت نهاية الإدخال &quot;k&quot;
و بالميجا بايت إذا كانت نهاية الإدخال &quot;m&quot;
و بالتيرا بايت إذا كانت نهاية الإدخال &quot;t&quot;</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="253"/>
        <source>Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="352"/>
        <source>Mount &quot;%1&quot;</source>
        <translation>حمل &quot;1%&quot;</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="468"/>
        <source>Choose A Module From The File System</source>
        <translation>اختر وحدة من نظام الملفات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="469"/>
        <source>Enter A Module Name To Use To Get Passphrase</source>
        <translation>أدخل اسم الوحدة المستهدفة للحصول على كلمة السر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="472"/>
        <source>Plugin Name</source>
        <translation>اسم الإضافة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="487"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="518"/>
        <source>Select A Key Module</source>
        <translation>اختر مفتاح الوحدة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="483"/>
        <source>Enter A Key</source>
        <translation>اختر مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="171"/>
        <source>Select External LUKS Header File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="204"/>
        <source>LUKS External Header Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="497"/>
        <source>Choose A KeyFile From The File System</source>
        <translation>اختر ملف مفتاح من نظام الملفات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="498"/>
        <source>Enter A Path To A Keyfile Location</source>
        <translation>أدخل مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="503"/>
        <source>KeyFile Path</source>
        <translation>مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="516"/>
        <source>Select A KeyFile</source>
        <translation>اختر ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="531"/>
        <source>Select Path To Mount Point Folder</source>
        <translation>اختر ماسرا لنقطة تحميل المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="562"/>
        <source>Select Encrypted volume</source>
        <translation>اختر مجلدا مشفرا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="326"/>
        <source>ERROR!</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="326"/>
        <source>Internal wallet is not configured</source>
        <translation>الخزانة الداخلية غير مهيأة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="715"/>
        <source>ERROR</source>
        <translation type="unfinished">خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="715"/>
        <source>Failed To Locate Or Run Yubikey&apos;s &quot;ykchalresp&quot; Program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="678"/>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="723"/>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="742"/>
        <source>Atleast one required field is empty</source>
        <translation>حقل واحد فارغ على الأقل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="685"/>
        <source>&quot;/&quot; character is not allowed in mount name field</source>
        <translation>الرمز &quot;/&quot; غير مسموح به في حقل اسم التحميل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="771"/>
        <source>Volume is not a LUKS volume</source>
        <translation>المجلد ليس مجلد لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="790"/>
        <source>Failed to get a key from the network</source>
        <translation>فشل في الحصول على مفتاح من الشبكة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="805"/>
        <source>Failed to get a key from a plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="947"/>
        <source>Failed to mount ntfs/exfat file system using ntfs-3g,is ntfs-3g/exfat package installed?</source>
        <translation>فشل في تحميل نظام ملفات ntfs/exfat باستخدام ntfs-3g المثبتة؟</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="948"/>
        <source>There seem to be an open volume accociated with given address</source>
        <translation>يبدو أن مجلدا مقترنا بالعنوان المعطى مفتوح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="949"/>
        <source>No file or device exist on given path</source>
        <translation>لا يوجد ملف أو قرص في المسار المعطى</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="950"/>
        <source>Volume could not be opened with the presented key</source>
        <translation>لم يمكن فتح المجلد بالمفتاح المعطى</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="951"/>
        <source>Insufficient privilege to mount the device with given options</source>
        <translation>صلاحيات غير كافية لتحميل القرص بالخيارات المحددة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="952"/>
        <source>Insufficient privilege to open device in read write mode or device does not exist</source>
        <translation>صلاحيات غير كافية لفتح القرص للقراءة والكتابة أو أن القرص غير موجود</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="953"/>
        <source>Only root user can perform this operation</source>
        <translation>فقط مستخدم مدير يمكنه تنفيذ هذه العملية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="954"/>
        <source>-O and -m options can not be used together</source>
        <translation>خيارا O- و m- لا يمكن استخدامهما معا في آن واحد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="955"/>
        <source>Could not create mount point, invalid path or path already taken</source>
        <translation>لم يمكن إنشاء نقطة التحميل. مسار خاطئ أو المسار قد سبق تعيينه</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="956"/>
        <source>Shared mount point path already taken</source>
        <translation>نقطة تحميل مشتركة سبق تعيينها</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="957"/>
        <source>There seem to be an opened mapper associated with the device</source>
        <translation>يبدو وجود مخطط مفتوح مقترن بهذا القرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="958"/>
        <source>Could not get a passphrase from the module</source>
        <translation>لم يمكن استرجاع كلمة السر من الوحدة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="959"/>
        <source>Could not get passphrase in silent mode</source>
        <translation>لم يمكن استرجاع كلمة السر ف يالطور الصامت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="960"/>
        <source>Insufficient memory to hold passphrase</source>
        <translation>ذاكرة غير كافية لاستيعاب كلمة السر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="961"/>
        <source>One or more required argument(s) for this operation is missing</source>
        <translation>معطى مطلوب أو أكثر لهذه العملية غير متوفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="962"/>
        <source>Invalid path to key file</source>
        <translation>مسار خاطئ لملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="963"/>
        <source>Could not get enought memory to hold the key file</source>
        <translation>لم يمكن الحصول على ذاكرة كافية لاسيتعاب ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="964"/>
        <source>Insufficient privilege to open key file for reading</source>
        <translation>صلاحيات غير كافية لفتح ملف المفتاح للقراءة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="965"/>
        <source>Could not get a passphrase through a local socket</source>
        <translation>لم يمكن الحصول على كلمة السر من خلال منفذ محلي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="966"/>
        <source>Failed to mount a filesystem:invalid/unsupported mount option or unsupported file system encountered</source>
        <translation>فشل في تحميل نظام الملفات: نقطة تحميل غير مدعومة أو نظام ملفات غير مدعوم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="967"/>
        <source>Could not create a lock on /etc/mtab</source>
        <translation>لم يمكن إنشاء قفل في /etc/mtab</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="968"/>
        <source>Insufficient privilege to open a system volume.

Consult menu-&gt;help-&gt;permission for more informaion
</source>
        <translation>صلاحيات غير كافية لفتح مجلد النظام.

راجع قائمة المساعدة ثم الأذونات لمزيد من المعلومات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="969"/>
        <source>A non supported device encountered,device is missing or permission denied
Possible reasons for getting the error are:
1.Device path is invalid.
2.The device has LVM or MDRAID signature</source>
        <translation>قرص غير مدعوم أو قرص غير موجود أو أذونات غير متوفرة
أسباب محتملة لهذا الخطأ:
1- مسار القرص غير صحيح
2- القرص له توقيع LVM أو MDRAID</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/password_dialog.cpp" line="971"/>
        <source>Error Code: %1
--
StdOut: %2
--
StdError: %3</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>plugin</name>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.ui" line="17"/>
        <source>Key Generator Using A Passphrase And A KeyFile</source>
        <translation>مولد المفتاح يستخدم كلمة سر و ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.ui" line="29"/>
        <source>&amp;Set Key</source>
        <translation>حدد مفتاحا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.ui" line="42"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.ui" line="93"/>
        <source>Create an encryption key that is made up of a passphrase and a keyfile.

A volume created with a key generated here should be opened with &quot;hmac&quot; plugin.</source>
        <translation>أنشئ مفتاح تشفير مكون من مفتاح وملف مفتاح

مجلد أنشئ بمفتاح ولد هنا لابد أن يفتح بأداة &quot;hmac&quot; الإضافية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.ui" line="115"/>
        <source>Passphrase</source>
        <translation>كلمة سر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.ui" line="144"/>
        <location filename="../../zuluCrypt-gui/plugin.cpp" line="155"/>
        <source>KeyFile</source>
        <translation>ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.cpp" line="101"/>
        <location filename="../../zuluCrypt-gui/plugin.cpp" line="144"/>
        <source>ERROR</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.cpp" line="101"/>
        <source>KeyFile Not Set</source>
        <translation>ملف مفتاح غير محدد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/plugin.cpp" line="144"/>
        <source>Failed To Generate Key</source>
        <translation>فشل في توليد المفتاح</translation>
    </message>
</context>
<context>
    <name>readOnlyWarning</name>
    <message>
        <location filename="../../zuluCrypt-gui/readonlywarning.ui" line="14"/>
        <source>WARNING</source>
        <translation>تحذير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/readonlywarning.ui" line="26"/>
        <source>Do Not Show This Message Again.</source>
        <translation>لا تظهر هذا مرة أخرى</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/readonlywarning.ui" line="39"/>
        <source>Setting this option will cause the volume to open in read only mode.</source>
        <translation>تهيئة هذا الخيار سوف يؤدي لفتح المجلد في طور القراءة فقط</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/readonlywarning.ui" line="58"/>
        <source>&amp;Ok</source>
        <translation>نعم</translation>
    </message>
</context>
<context>
    <name>tcrypt</name>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="17"/>
        <source>TrueCrypt Keys</source>
        <translation>مفاتيح ترو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="29"/>
        <source>&amp;Open</source>
        <translation>افتح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="42"/>
        <source>&amp;Cancel</source>
        <translation>ألغ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="68"/>
        <source>Add &amp;Keyfile</source>
        <translation>أضف ملف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="84"/>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="115"/>
        <source>drag and drop key files to add them to the list</source>
        <translation>اسحب وأفلت ملفات المفتاح لإضافتهم بالقائمة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="112"/>
        <source>Keyfile Paths</source>
        <translation>مسار ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="132"/>
        <source>Enter key files below to be used to open the volume</source>
        <translation>أدخل ملفات المفتاح بالأسفل لاستخدامهم في فتح المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.ui" line="151"/>
        <source>Enter A Passphrase Below To Be Used To Open The Volume</source>
        <translation>أدخل كلمة السر بالأسفل لفتح المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.cpp" line="56"/>
        <source>&amp;Set</source>
        <translation>حدد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.cpp" line="59"/>
        <source>TrueCrypt/VeraCrypt Keys</source>
        <translation>مفاتيح فيرا كربت/ ترو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.cpp" line="110"/>
        <source>ERROR</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.cpp" line="110"/>
        <source>At least one keyfile is required</source>
        <translation>عل الأقل ملف مفتاح واحد مطلوب</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/tcrypt.cpp" line="132"/>
        <source>Select A KeyFile</source>
        <translation>اختر ملف مفتاح</translation>
    </message>
</context>
<context>
    <name>utility::veraCryptWarning</name>
    <message>
        <location filename="../../zuluCrypt-gui/utility.h" line="880"/>
        <source>Elapsed time: 0 seconds</source>
        <translation>الوقت المنقضي: 0 ثوان</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.h" line="888"/>
        <source>Elapsed time: %0 minutes</source>
        <translation>الوقت المنقضي: 0% دقائق</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.h" line="890"/>
        <source>Elapsed time: %0 seconds</source>
        <translation>الوقت المنقضي: 0% ثوان</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/utility.h" line="901"/>
        <source>Please be patient as unlocking a VeraCrypt volume may take a very long time.

</source>
        <translation>يرجى الانتظار ففك تشفير مجلد فيرا كربت يستغرق وقتا طويلا</translation>
    </message>
</context>
<context>
    <name>warnWhenExtendingContainerFile</name>
    <message>
        <location filename="../../zuluCrypt-gui/warnwhenextendingcontainerfile.ui" line="14"/>
        <source>WARNING!!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/warnwhenextendingcontainerfile.ui" line="26"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/warnwhenextendingcontainerfile.ui" line="39"/>
        <source>Dont Show This Warning Again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/warnwhenextendingcontainerfile.ui" line="52"/>
        <source>Your cover file will be irreversibly changed and we suggest continuing with a backup file and not the original.

To unlock the volume about to be created, you will need to enter the password you will choose and the volume offset automatically generated by zuluCrypt.

Instructions to unlock the volume are as follows:
1. From the menu, choose Open -&gt; Volume Hosted In A File.
2. Select file, then choose &quot;Volume Type&quot; = PLAIN dm-crypt.
3. Enter the generated offset value along with your password. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/warnwhenextendingcontainerfile.ui" line="85"/>
        <source>IMPORTANT!!!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>zuluCrypt</name>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="20"/>
        <source>zuluCrypt</source>
        <translation>زولو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="74"/>
        <source>Encrypted Volume Path</source>
        <translation>مسار المجلد المشفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="79"/>
        <source>Encrypted Volume Mount Point Path</source>
        <translation>مسار نقطة تحميل المجلد المشفر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="84"/>
        <source>Type</source>
        <translation>نوع</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="102"/>
        <source>&amp;Open</source>
        <translation>افتح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="111"/>
        <source>&amp;Create</source>
        <translation>أنشئ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="121"/>
        <source>&amp;Help</source>
        <translation>مساعدة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="128"/>
        <source>&amp;Volumes</source>
        <translation>مجلدات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="140"/>
        <source>Optio&amp;ns</source>
        <translation>خيلرلت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="188"/>
        <source>&amp;Volume Hosted In A File</source>
        <translation>المجلدات المستضافة في ملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="196"/>
        <source>Volume &amp;Hosted In A Hard Drive</source>
        <translation>المجلدات المستضافة على قرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="221"/>
        <source>Encrypted &amp;Container In A Hard Drive</source>
        <translation>حاوية مشفرة في قرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="232"/>
        <source>&amp;About</source>
        <translation>حول</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="240"/>
        <source>&amp;Add A Key To A Volume</source>
        <translation>أضف مفتاحا للمجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="248"/>
        <source>&amp;Delete A Key From A Volume</source>
        <translation>امسح مفتاحا من المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="264"/>
        <source>&amp;KeyFile</source>
        <translation>ملف المفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="272"/>
        <source>&amp;Tray Icon</source>
        <translation>أيقونة الشريط</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="280"/>
        <source>Select &amp;Font</source>
        <translation>اختر خطا</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="314"/>
        <source>&amp;Update Volume List</source>
        <translation>حدث قائمة المجلدات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="322"/>
        <source>&amp;Minimize To Tray</source>
        <translation>صغر إلى الشريط</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="330"/>
        <source>&amp;Quit</source>
        <translation>اخرج</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="338"/>
        <source>&amp;Close All Opened Volumes</source>
        <translation>اغلق جميع المجلدات المفتوحة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="346"/>
        <source>&amp;Manage Favorites</source>
        <translation>تحكم في المفضلات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="354"/>
        <source>&amp;Erase Data In A Device</source>
        <translation>امسح البيانات على الجهاز</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="362"/>
        <source>&amp;Backup Header</source>
        <translation>نسخ احتياطي للترويسة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="370"/>
        <source>&amp;Restore Header</source>
        <translation>استعادة الترويسة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="386"/>
        <source>Encrypt A &amp;File</source>
        <translation>شفر ملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="394"/>
        <source>&amp;Decrypt A File</source>
        <translation>فك تشفير ملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="402"/>
        <source>&amp;Header Backup</source>
        <translation>نسخ احتياطي للترويسة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="410"/>
        <source>Manag&amp;e System Volumes</source>
        <translation>تحكم في مجلدات النظام</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="418"/>
        <source>Manage &amp;Volumes In Internal Wallet</source>
        <translation>تحكم في المجلدات بداخل الخزانة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="434"/>
        <source>Manage &amp;Non System Volumes</source>
        <translation>تحكم في المجلدات غير النظامية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="442"/>
        <source>Manage Volumes In &amp;KDE Wallet</source>
        <translation>تحكم في المجلدات في خزانة KDE</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="450"/>
        <source>Manage Volumes In &amp;GNOME keyring</source>
        <translation>تحكم في المجلدات في مفاتيح GNOME</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="458"/>
        <source>&amp;Change Internal Wallet Password</source>
        <translation>غير كلمة سر الخزانة الداخلية</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="492"/>
        <source>H&amp;elp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="495"/>
        <source>F1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="571"/>
        <source>Show LUKS Key Slots</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="526"/>
        <source>Set Fi&amp;le Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="534"/>
        <source>Do Not Minimize To Tray</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="537"/>
        <source>This Option Will Close The App Instead Of Minimizing It To Tray</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="542"/>
        <source>Encrypted Container Hidden In Video/Cover File (Steganography)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="550"/>
        <source>Show Debug Window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="553"/>
        <source>Ctrl+Shift+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="558"/>
        <source>Encrypted Container In An Existing File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="566"/>
        <source>Clear Dead Mount Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="500"/>
        <source>Contact &amp;Info</source>
        <translation>معلومات التواصل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="508"/>
        <source>&amp;Select Language</source>
        <translation>اختر اللغة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="513"/>
        <source>&amp;Auto Open Mount Point</source>
        <translation>فتح تلقائي لنقطة التحميل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="521"/>
        <source>Select &amp;Icons</source>
        <translation>اختر أيقونة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="154"/>
        <source>&amp;Favorites</source>
        <translation>المفضلات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="159"/>
        <source>&amp;zC</source>
        <translation>زولو كربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="191"/>
        <source>Ctrl+Z</source>
        <translation>Ctrl+Z</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="199"/>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="207"/>
        <source>&amp;Encrypted Container In A New File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="210"/>
        <source>Ctrl+A</source>
        <translation>Ctrl+A</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="224"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="235"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="389"/>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="243"/>
        <source>Ctrl+U</source>
        <translation>Ctrl+U</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="251"/>
        <source>Ctrl+W</source>
        <translation>Ctrl+W</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="256"/>
        <source>crypto info</source>
        <translation>معلومات التشفير</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="259"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="479"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="516"/>
        <source>Ctrl+E</source>
        <translation>Ctrl+E</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="267"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="275"/>
        <source>Ctrl+K</source>
        <translation>Ctrl+K</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="283"/>
        <source>Ctrl+L</source>
        <translation>Ctrl+L</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="288"/>
        <source>favorite volumes</source>
        <translation>المجلدات المفضلة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="293"/>
        <source>manage favorites</source>
        <translation>تحكم في المفضلات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="298"/>
        <source>select random number generator</source>
        <translation>اختر مولد الرقم العشوائي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="301"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="373"/>
        <source>Ctrl+P</source>
        <translation>Ctrl+P</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="306"/>
        <source>close application</source>
        <translation>أغلق التطبيق</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="309"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="413"/>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="317"/>
        <source>Ctrl+T</source>
        <translation>Ctrl+T</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="325"/>
        <source>Ctrl+Y</source>
        <translation>Ctrl+Y</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="514"/>
        <source>Quit</source>
        <translation>خروج</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="333"/>
        <source>Ctrl+Q</source>
        <translation>Ctrl+Q</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="341"/>
        <source>Ctrl+G</source>
        <translation>Ctrl+G</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="349"/>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="357"/>
        <source>Ctrl+N</source>
        <translation>Ctrl+N</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="365"/>
        <source>Ctrl+B</source>
        <translation>Ctrl+B</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="378"/>
        <source>permissions</source>
        <translation>الصلاحيات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="381"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="487"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="545"/>
        <source>Ctrl+I</source>
        <translation>Ctrl+I</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="397"/>
        <source>Ctrl+H</source>
        <translation>Ctrl+H</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="405"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="561"/>
        <source>Ctrl+J</source>
        <translation>Ctrl+J</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="421"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="429"/>
        <source>Ctrl+V</source>
        <translation>Ctrl+V</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="426"/>
        <source>configure wallets</source>
        <translation>هيئ الخزانات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="437"/>
        <source>Ctrl+M</source>
        <translation>Ctrl+M</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="445"/>
        <source>Shift+V</source>
        <translation>Shift+V</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="453"/>
        <source>Alt+V</source>
        <translation>Alt+V</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="461"/>
        <source>Ctrl+O</source>
        <translation>Ctrl+O</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="466"/>
        <source>tcrypt backup header</source>
        <translation>نسخ اتياطي لترويسة تروكربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="471"/>
        <source>tcrypt restore header</source>
        <translation>استعادة ترويسة تروكربت</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="476"/>
        <source>VeraCrypt Container In A File</source>
        <translation>حاوية فيرا كربت في ملف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="484"/>
        <source>VeraCrypt Container In A Hard Drive</source>
        <translation>حاوية فيرا كربت في قرص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.ui" line="503"/>
        <source>Shift+I</source>
        <translation>Shift+I</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="460"/>
        <source>Select Language</source>
        <translation>اختر اللغة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="436"/>
        <source>Restore Volume Header</source>
        <translation>استعادة ترويسة المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="437"/>
        <source>Backup Volume Header</source>
        <translation>نسخ احتياطي لترويسة المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="792"/>
        <source>INFO</source>
        <translation>معلومات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="792"/>
        <source>Resetting font size to %1 because larger font sizes do not fit</source>
        <translation>إعادة ضبط الخطوط لحجم 1% لأن الخطوط الكبيرة لا تضبط</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="856"/>
        <source>
LUKS,TrueCrypt and VeraCrypt based encrypted volumes have what is called a &quot;volume header&quot;.

A volume header is responsible for storing information necessary to open a header using encrypted volume and any damage to it will makes it impossible to open the volume causing permanent loss of encrypted data.

The damage to the header is usually caused by accidental formatting of the device or use of some buggy partitioning tools or wrongly reassembled logical volumes.

Having a backup of the volume header is strongly advised because it is the only way the encrypted data will be accessible again after the header is restored if the header on the volume get corrupted.

</source>
        <translation>المجلدات المشفرة بلوكس و ترو كربت و فيرا كربت لها ترويسة.

ترويسة المجلد مهمته حفظ المعلومات الضرورية لفتح المجلد المشفر وأي عطب به سوف يتسبب في عدم فتح المجلد وبالتالي فقد البيانات للأبد.

لذلك فإنه ينصح بشدة بنسخ احتياطي للترويسة والتي ستمكنك من فتح المجلد في حالة عطب ترويسة المجلد الأصل.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="865"/>
        <source>Important Information On Volume Header Backup</source>
        <translation>معلومات مهمة عن ترويسة المجلد الاحتياطية.</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="904"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1135"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1136"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1137"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1138"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1139"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1140"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1141"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1142"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1143"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1144"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1146"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1147"/>
        <source>ERROR!</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="904"/>
        <source>Volume is not open or was opened by a different user</source>
        <translation>المجلد غير مفتوح أو مفتوح من مستخدم آخر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="906"/>
        <source>Volume Properties</source>
        <translation>خصائص المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="991"/>
        <source>WARNING!</source>
        <translation>تحذير!</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="992"/>
        <source>Could not open mount point because &quot;%1&quot; tool does not appear to be working correctly</source>
        <translation>لا يمكن فتح نقطة التحميل لأن أداة &quot;1%&quot; لايبدو أنها تعمل بشكل سليم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1029"/>
        <source>Properties</source>
        <translation>خصائص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1019"/>
        <source>Open Folder</source>
        <translation>افتح المجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="138"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="228"/>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="263"/>
        <source>ERROR</source>
        <translation type="unfinished">خطأ</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="228"/>
        <source>zuluCrypt Failed To Connect To zuluPolkit.
Please Report This Serious Bug.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="260"/>
        <source>Cryptsetup library could not be found and zuluCrypt will most likely not work as expected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="261"/>
        <source>

Please recompile zuluCrypt to force it to re-discover the new library</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="352"/>
        <source>Path To A File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="513"/>
        <source>Show/Hide</source>
        <translation>اظهر/أخف</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1021"/>
        <source>Open Private Folder</source>
        <translation>افتح مجلد خاص</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1023"/>
        <source>Open Shared Folder</source>
        <translation>افتح مجلد مشترك</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1039"/>
        <source>Add Key</source>
        <translation>أضف مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1040"/>
        <source>Remove Key</source>
        <translation>امسح مفتاح</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1042"/>
        <source>Show Key Slots Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1050"/>
        <source>Backup LUKS Header</source>
        <translation>تنسخ ترويسة لوكس</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1071"/>
        <source>Add To Favorite</source>
        <translation>أضف للمفضلات</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1083"/>
        <source>Unmount</source>
        <translation>تنزيل</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1086"/>
        <source>Cancel</source>
        <translation>إلغاء</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1135"/>
        <source>Close failed, volume is not open or was opened by a different user</source>
        <translation>فشل الاقفال. المجلد غير مفتوح أو مفتوح من مستخدم آخر</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1136"/>
        <source>Close failed, one or more files in the volume are in use.</source>
        <translation>فشل الاقفال. ملف أو أكثر قيد الاستخدام</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1137"/>
        <source>Close failed, volume does not have an entry in /etc/mtab</source>
        <translation>فشل الاقفال. المجلد ليس له سجل في /etc/mtab</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1138"/>
        <source>Close failed, could not get a lock on /etc/mtab~</source>
        <translation>فشل الاقفال. المجلد ليس له سجل في  /etc/mtab~</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1139"/>
        <source>Close failed, volume is unmounted but could not close mapper,advice to close it manually</source>
        <translation>فشل الاقفال. المجلد تم تنزيله لكن لم يمكن إغلاق الاقتران. قم بالاغلاق اليدوي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1140"/>
        <source>Close failed, could not resolve full path of device
</source>
        <translation>فشل الاقفال. لم يمكن معرفة المسار الكامل للجهاز</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1141"/>
        <source>Close failed, shared mount point appear to be busy
</source>
        <translation>فشل الاقفال. نقطة التحميل المشتركة تبدو مشغولة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1142"/>
        <source>Close failed, shared mount point appear to belong to a different user or multiple mount points detected
</source>
        <translation>فشل الاقفال. نقطة التحميل المشتركة تتبع مستخدما آخر أو اكتشفت نقاط متعددة</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1143"/>
        <source>Close failed, shared mount point appear to be in an ambiguous state,advice to unmount manually</source>
        <translation>فشل الاقفال. نقطة التحميل المشتركة غير واضحة. قم بالاقفال اليدوي</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1144"/>
        <source>Close failed, multiple mount points for the volume detected</source>
        <translation>فشل الاقفال. اكتشفت نقاط متعددة للمجلد</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1146"/>
        <source>Close failed, could not find any partition with the presented UUID</source>
        <translation>فشل الاقفال. لا يوجد أي قسم يحمل الرقم التعريفي المستخدم</translation>
    </message>
    <message>
        <location filename="../../zuluCrypt-gui/zulucrypt.cpp" line="1147"/>
        <source>Unrecognized error with status number %1 encountered</source>
        <translation>خطأ غير معروف برقم حالة 1%</translation>
    </message>
</context>
</TS>
