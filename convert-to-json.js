const data = [
  'المنيزلة (السعودية)',
  'العمران (الأحساء)',
  'رياض الخبراء',
  'الكلابية (الأحساء)',
  'العقيق (الباحة)',
  'الذيبية (حفر الباطن)',
  'القرين (الأحساء)',
  'الظبية (جازان)',
  'الجارودية (القطيف)',
  'قبة (محافظة الأسياح)',
  'الجبيل (الأحساء)',
  'الجفر (الأحساء)',
  'القارة (الأحساء)',
  'الرميلة (السعودية)',
  'المنصورة (الأحساء)',
  'البديع والقرفي',
  'العالية (جازان)',
  'الخضراء (صبيا)',
  'الخبراء (القصيم)',
  'القرن (الأحساء)',
  'الحريق (الرياض)',
  'عشيرة (محافظة الطائف)',
  'الاثنين (عسير)',
  'حاكمة أبي عريش',
  'البديع الشمالي (الأفلاج)',
  'الخوبة (جازان)',
  'المركز (الأحساء)',
  'مركز الحديثة (القريات)',
  'العارضة (جازان)',
  'أم الدوم',
  'منطقة مكة المكرمة',
  'الحوطة (الأحساء)',
  'حي القطار (الخرج)',
  'الرويضة (توضيح)',
  'الحلوة (حوطة بني تميم)',
  'صعبر',
  'الحسيني (جازان)',
  'بحر أبو سكينة',
  'بئر بن هرماس',
  'الدليمية (القصيم)',
  'اليمامة (الخرج)',
  'الشقيق (الأحساء)',
  'الخضراء (مكة المكرمة)',
  'المراح (الأحساء)',
  'الملاحة (القطيف)',
  'مركز العيساوية (القريات)',
  'روضة ابن هباس',
  'القوارة (بريدة)',
  'جبة (السعودية)',
  'عرجاء (الدوادمي)',
  'مركز الجديدة',
  'اللقية (جازان)',
  'الركوبة (جازان)',
  'ظلم (مكة المكرمة)',
  'المباركة (جازان)',
  'الذيبية (القصيم)',
  'سبت العلاية',
  'خليص',
  'حوطة سدير',
  'الحليلة',
  'الليث',
  'البطالية',
  'ثول',
  'المجاردة',
  'الحاير',
  'المشعلية',
  'الحناكية',
  'أم الحمام',
  'خيبر',
  'مهد الذهب',
  'الدائر',
  'تنومة (عسير)',
  'العويقيلة',
  'النابية',
  'فرسان (جازان)',
  'سراة عبيدة',
  'بقعاء',
  'أم الساهك',
  'البدع (تبوك)',
  'قلوة',
  'ساجر',
  'عرقة (الرياض)',
  'الأوجام',
  'الجشة',
  'الجش (القطيف)',
  'مرات',
  'ضرما',
  'العيص',
  'الأرطاوية',
  'الهياثم',
  'أضم',
  'جعرانة',
  'المندق',
  'حلة محيش',
  'مركز صوير',
  'حريملاء',
  'طريب',
  'تمير',
  'التويثير',
  'العضيلية',
  'قرية العليا',
  'الثمد (خيبر)',
  'الدرب',
  'الهدا',
  'الغاط',
  'حرمة',
  'المويه',
  'الخويلدية',
  'العيينة',
  'المظيلف',
  'الجرادية',
  'التوبي',
  'عيون الجواء',
  'تثليث (مدينة)',
  'حبونا',
  'المضايا',
  'العيدابي',
  'المطعن',
  'الطوال',
  'ثادق',
  'الشقيري',
  'المحفر',
  'ذهبان',
  'الشنان',
  'الحائط',
  'المليداء',
  'مستورة',
  'مسلية (جازان)',
  'عقلة الصقور',
  'عين بن فهيد',
  'الفضول (قرية)',
  'المطيرفي',
  'السفانية',
  'بني معن',
  'أبو السلع',
  'مليجة',
  'جليجلة',
  'الشماسية',
  'الجاضع',
  'مزهرة (جازان)',
  'حايرة السلم',
  'رخية',
  'دخنة',
  'تبالة',
  'الفويلق',
  'أبو السداد',
  'القاعد',
  'الضبيعة',
  'حالة عمار',
  'تصلال',
  'ميسان (مدينة)',
  'السديرة (مكة)',
  'تربة (حائل)',
  'نعجان (الدلم)',
  'مركز الفياض',
];

const json_data = data.map((item) => {
  return {
    'ar-title': item,
    'en-title': '',
  };
});

const json_string = JSON.stringify(json_data, null, 4);
console.log(json_string);
