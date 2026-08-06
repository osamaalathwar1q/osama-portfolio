import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "afaq-code-platform",
    imageFileName: "afaq.png",
    publicImagePath: "/images/afaq.png",
    name: "منصة AFAQ CODE للحلول البرمجية",
    description: "الواجهة الرقمية الرسمية لمنظومة AFAQ CODE البرمجية؛ منصة متكاملة مخصصة لتقديم خدمات التحول الرقمي وتطوير الأنظمة السحابية وتطبيقات الموبايل للمؤسسات. تعكس المنصة هويتي الهندسية كـ Founder و Team Leader وتستعرض المعماريات البرمجية والمشاريع المنفذة.",
    keyFeatures: [
      "بنية هندسية متكاملة لتقديم الخدمات البرمجية والتحول الرقمي",
      "معرض تفاعلي للأعمال والأنظمة المنفذة بأحدث التقنيات",
      "لوحة تعريفية متطورة برؤية وتوجه فريق AFAQ CODE",
      "بوابة تواصل واستشارات تقنية سريعة للعملاء والمؤسسات",
      "تصميم مرن ومحسن بالكامل لمحركات البحث والأجهزة المختلفة"
    ],
    technologies: ["Next.js", "React", "TypeScript", "PHP", "MySQL", "Tailwind CSS", "REST API Integration"],
    buttonText: "معاينة المنصة المباشرة",
    link: "https://afaqcodesystem.42web.io/",
    isUnderDevelopment: false
  },
  {
    id: "rasd-application",
    imageFileName: "rasd.png",
    publicImagePath: "/images/rasd.png",
    name: "تطبيق رصد الإخباري (Rasd App)",
    description: "تطبيق موبايل ذكي ومحترف تم بناؤه باستخدام فريمورك Flutter لتقديم تجربة قراءة إخبارية سلسة وإدارة الملاحظات الشخصية بأسلوب عصري. يحل التطبيق مشكلة تشتت المصادر الإخبارية وبطء التصفح من خلال تقديم واجهات ديناميكية مريحة للعين وتكامل مباشر مع قواعد البيانات المحلية.",
    keyFeatures: [
      "تصفح إخباري سريع ومبوب حسب الاهتمامات والمصادر",
      "نظام تدوين ملاحظات مدمج مع حفظ محلي باستخدام SQLite",
      "إدارة حالات التطبيق المتقدمة باستخدام Bloc State Management",
      "دعم الأوفلاين وقراءة المقالات المحفوظة بدون إنترنت",
      "واجهات مستخدم تفاعلية بتصميم Material Design 3"
    ],
    technologies: ["Flutter", "Dart", "Bloc Pattern", "SQLite Local DB", "REST API", "Clean Architecture"],
    buttonText: "معاينة مشروع التطبيق",
    link: "https://afaqcodesystem.42web.io/project.html?id=4",
    isUnderDevelopment: false
  },
  {
    id: "tadbeer-erp-system",
    imageFileName: "tadbeer.png",
    publicImagePath: "/images/tadbeer.png",
    name: "نظام تدبير لإدارة المبيعات والمخازن (Tadbeer ERP)",
    description: "نظام ERP مكتبي متكامل جرى تطويره بلغة C# وبيئة WinForms خصيصاً لإدارة المبيعات، المخازن، ومحلات الهواتف الذكية. يحل النظام تعقيدات متابعة الأجهزة وتتبع الأرقام التسلسلية (IMEI) وتدقيق الفواتير والحسابات بمرونة عالية وأداء فائق بدون تهنيج.",
    keyFeatures: [
      "تتبع دقيق لأجهزة الهواتف الذكية برقم الـ IMEI الذاتي",
      "إدارة المخزون، المشتريات، المبيعات، والفواتير الفورية",
      "نظام أذونات وصلاحيات شجري للمستخدمين والموظفين",
      "إصدار تقارير مالي ومخزني دقيق وقابل للتصدير الطباعي",
      "قاعدة بيانات متينة ومحمية بـ Microsoft SQL Server"
    ],
    technologies: ["C#", ".NET WinForms", "Microsoft SQL Server", "Crystal Reports", "ERP Logic Architecture"],
    buttonText: "معاينة تفاصيل النظام",
    link: "https://afaqcodesystem.42web.io/project.html?id=3",
    isUnderDevelopment: false
  },
  {
    id: "smart-store-management",
    imageFileName: "tadbeer1.png",
    publicImagePath: "/images/tadbeer1.png",
    name: "منظومة المتجر الذكي لإدارة الأعمال (Smart Store)",
    description: "تطبيق ويب سحابي شامل تم تصميمه لتزويد أصحاب المتاجر والمشاريع التجارية بنظام إدارة مركزية ذكي للعمليات اليومية. يربط النظام بين المبيعات، المنتجات، الاشتراكات، وحسابات المستخدمين في بيئة آمنة وقابلة للوصول من أي جهاز عبر المتصفح.",
    keyFeatures: [
      "إدارة المنتجات، الأقسام، والمخزون السحابي لحظة بلحظة",
      "نظام اشتراكات وصلاحيات مرن حسب خطة العمل",
      "لوحة تحكم إحصائية تفاعلية لمتابعة المبيعات والأرباح",
      "واجهة مستخدم سريعة الاستجابة مبنية بـ Next.js و TypeScript",
      "تكامل خادم آمن مع قاعدة بيانات MySQL و RESTful APIs"
    ],
    technologies: ["Next.js", "TypeScript", "React", "PHP Backend", "MySQL", "Tailwind CSS"],
    buttonText: "معاينة النظام السحابي",
    link: "https://afaqcodesystem.42web.io/project.html?id=7",
    isUnderDevelopment: false
  },
  {
    id: "world-investment-landing",
    imageFileName: "world.png",
    publicImagePath: "/images/world.png",
    name: "صفحة هبوط عالم الاستثمار (World Investment)",
    description: "صفحة هبوط تسويقية عالية الفخامة تم بناء تصميمها بعناية لتمثيل المحافظ الاستثمارية والخدمات المالية بصورة احترافية تجذب المستثمرين. تركز الصفحة على تحسين معدلات التحويل (Conversion Rate Optimization) والأداء السريع وتوافق محركات البحث.",
    keyFeatures: [
      "تصميم عصري مبهر يضمن تجربة مستخدم فاخرة وموثوقة",
      "تهيئة فائقة لمحركات البحث (Advanced SEO Best Practices)",
      "أقسام تفاعلية لعرض الخدمات الاستثمارية وخطط النمو",
      "سرعة تحميل ممتازة وتوافق تام مع كافة الهواتف والشاشات",
      "أنيميشن ومؤثرات حركية خفيفة تضفي طابعاً احترافياً"
    ],
    technologies: ["HTML5", "CSS3 / Vanilla Styling", "JavaScript (ES6+)", "SEO Optimization", "Responsive Design"],
    buttonText: "معاينة صفحة الهبوط",
    link: "https://afaqcodesystem.42web.io/project.html?id=2",
    isUnderDevelopment: false
  },
  {
    id: "mihwar-archiving-system",
    imageFileName: "محور.png",
    publicImagePath: "/images/محور.png",
    name: "نظام محور للأرشفة وإدارة الوثائق (Mihwar System)",
    description: "مشروع نظام أرشفة وإدارة مستندات إلكتروني متقدم مخصص للمؤسسات والشركات لتنظيم وتتبع الأرشيف الورقي والرقمي. يهدف النظام إلى إلغاء المعاملات الورقية وتأمين الوثائق الحساسة وفق أعلى معايير التشفير والأذونات والمراحل الإدارية (Workflow Management).",
    keyFeatures: [
      "أرشفة وتصنيف الوثائق والمستندات ببروتوكولات البحث السريع",
      "تتبع سريان المعاملات والربط بين الإدارات والأقسام",
      "نظام حماية صارم وصلاحيات متعددة مستويات التشفير",
      "أتمتة دورة حياة الوثيقة من الإنشاء حتى الأرشفة النهائية",
      "بنية تحتية حديثة قابلة للتوسع والتكامل المؤسسي"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js API", "MySQL", "Authentication Protocols", "Role-Based Access"],
    buttonText: "قيد التطوير",
    link: null,
    isUnderDevelopment: true
  }
];
