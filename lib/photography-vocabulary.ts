// Photography Vocabulary in 3 languages for chatbot responses

export const PHOTOGRAPHY_VOCABULARY = {
  fr: {
    technique: {
      exposition: {
        ouverture: "Diamètre du diaphragme (f/1.4 = grande ouverture = plus de lumière, f/16 = petite ouverture = moins de lumière)",
        vitesse: "Temps d'exposition (1/1000s = rapide = figer le mouvement, 1s = lent = flou de mouvement)",
        iso: "Sensibilité du capteur (ISO 100 = peu sensible = qualité optimale, ISO 6400 = très sensible = bruit numérique)"
      },
      profondeurChamp: {
        reduite: "Arrière-plan flou",
        grande: "Tout net"
      }
    },
    composition: {
      regles: {
        tiers: "Diviser l'image en 9 parties égales",
        lignesDirectrices: "Guider le regard",
        cadrage: "Choix des éléments inclus",
        pointDeVue: "Angle de prise de vue"
      },
      plans: {
        large: "Cadre large, environnement",
        moyen: "Sujet en entier",
        grosPlan: "Détails du sujet",
        serre: "Très gros plan"
      }
    },
    equipement: {
      appareils: {
        reflex: "Miroir, viseur optique",
        hybride: "Sans miroir, viseur électronique",
        bridge: "Zoom fixe, intermédiaire",
        compact: "Petit, automatique"
      },
      objectifs: {
        grandAngle: "< 35mm → paysages",
        standard: "50mm → polyvalent",
        teleobjectif: "> 70mm → sports, portraits",
        macro: "Grossissement rapproché",
        focaleFixe: "Distance focale fixe",
        zoom: "Focale variable"
      }
    },
    lumiere: {
      qualite: {
        douce: "Ombres diffuses",
        dure: "Contraste marqué",
        naturelle: "Soleil",
        artificielle: "Flash, LED"
      },
      temperature: {
        chaud: "3000K → orangé",
        froid: "6000K → bleuté",
        balanceBlancs: "Ajuster les couleurs"
      }
    },
    techniques: {
      portrait: {
        pose: "Position du sujet",
        eclairageStudio: "Flash, softbox",
        arrierePlan: "Contexte du portrait"
      },
      paysage: {
        premierPlan: "Élément proche",
        arrierePlan: "Éloigné",
        horizon: "Ligne de séparation ciel/terre"
      },
      nuit: {
        poseLongue: "Exposition prolongée",
        lightPainting: "Dessin avec lumière",
        bruit: "Granulation en basse lumière"
      }
    },
    postProduction: {
      logiciels: {
        developpement: "Traitement RAW",
        retouche: "Corrections avancées",
        montage: "Composition d'images"
      },
      ajustements: {
        contraste: "Différence tons clairs/sombres",
        saturation: "Intensité des couleurs",
        nettete: "Accentuation des détails",
        vignetage: "Assombrissement des bords"
      }
    },
    genres: {
      rue: "Scènes de vie urbaine",
      documentaire: "Reportage réel",
      animaliere: "Animaux sauvages",
      culinaire: "Nourriture",
      architecture: "Bâtiments, structures",
      abstraite: "Formes, couleurs"
    },
    effets: {
      bokeh: "Flou d'arrière-plan esthétique",
      flouMouvement: "Sensation de vitesse",
      silhouette: "Sujet sombre sur fond clair",
      contreJour: "Lumière derrière le sujet"
    },
    perspective: {
      plongee: "Photo vers le bas",
      contrePlongee: "Photo vers le haut",
      pointFuite: "Convergence des lignes"
    },
    formats: {
      raw: "Fichier brut → qualité maximale",
      jpeg: "Compressé → usage courant",
      png: "Transparence → web",
      tiff: "Non compressé → impression"
    },
    accessoires: {
      trepied: "Stabilité",
      filtres: "Effets optiques",
      flashExterne: "Éclairage additionnel",
      declencheur: "Prise de vue à distance"
    }
  },
  en: {
    technique: {
      exposition: {
        aperture: "Diaphragm diameter (f/1.4 = wide aperture = more light, f/16 = narrow aperture = less light)",
        shutterSpeed: "Exposure time (1/1000s = fast = freeze motion, 1s = slow = motion blur)",
        iso: "Sensor sensitivity (ISO 100 = low sensitivity = optimal quality, ISO 6400 = high sensitivity = digital noise)"
      },
      depthOfField: {
        shallow: "Blurred background",
        deep: "Everything sharp"
      }
    },
    composition: {
      rules: {
        ruleOfThirds: "Divide image into 9 equal parts",
        leadingLines: "Guide the eye",
        framing: "Choice of included elements",
        pointOfView: "Shooting angle"
      },
      shotTypes: {
        wide: "Wide frame, environment",
        medium: "Full subject",
        closeUp: "Subject details",
        extremeCloseUp: "Very tight shot"
      }
    },
    equipment: {
      cameras: {
        dslr: "Mirror, optical viewfinder",
        mirrorless: "No mirror, electronic viewfinder",
        bridge: "Fixed zoom, intermediate",
        compact: "Small, automatic"
      },
      lenses: {
        wideAngle: "< 35mm → landscapes",
        standard: "50mm → versatile",
        telephoto: "> 70mm → sports, portraits",
        macro: "Close-up magnification",
        prime: "Fixed focal length",
        zoom: "Variable focal length"
      }
    },
    light: {
      quality: {
        soft: "Diffused shadows",
        hard: "Strong contrast",
        natural: "Sunlight",
        artificial: "Flash, LED"
      },
      temperature: {
        warm: "3000K → orange",
        cool: "6000K → bluish",
        whiteBalance: "Adjust colors"
      }
    },
    techniques: {
      portrait: {
        pose: "Subject position",
        studioLighting: "Flash, softbox",
        background: "Portrait context"
      },
      landscape: {
        foreground: "Close element",
        background: "Distant",
        horizon: "Sky/ground separation line"
      },
      night: {
        longExposure: "Prolonged exposure",
        lightPainting: "Drawing with light",
        noise: "Grain in low light"
      }
    },
    postProduction: {
      software: {
        development: "RAW processing",
        retouching: "Advanced corrections",
        compositing: "Image composition"
      },
      adjustments: {
        contrast: "Difference between light/dark tones",
        saturation: "Color intensity",
        sharpness: "Detail enhancement",
        vignetting: "Edge darkening"
      }
    },
    genres: {
      street: "Urban life scenes",
      documentary: "Real reportage",
      wildlife: "Wild animals",
      food: "Food",
      architecture: "Buildings, structures",
      abstract: "Shapes, colors"
    },
    effects: {
      bokeh: "Aesthetic background blur",
      motionBlur: "Speed sensation",
      silhouette: "Dark subject on light background",
      backlighting: "Light behind subject"
    },
    perspective: {
      highAngle: "Shot from above",
      lowAngle: "Shot from below",
      vanishingPoint: "Line convergence"
    },
    formats: {
      raw: "Raw file → maximum quality",
      jpeg: "Compressed → common use",
      png: "Transparency → web",
      tiff: "Uncompressed → printing"
    },
    accessories: {
      tripod: "Stability",
      filters: "Optical effects",
      externalFlash: "Additional lighting",
      remoteTrigger: "Remote shooting"
    }
  },
  ar: {
    technique: {
      exposition: {
        fatha: "قطر الحجاب الحاجز (f/1.4 = فتحة كبيرة = مزيد من الضوء، f/16 = فتحة صغيرة = أقل ضوء)",
        suratAlghalaq: "وقت التعريض (1/1000 ثانية = سريع = تجميد الحركة، 1 ثانية = بطيء = ضبابية الحركة)",
        iso: "حساسية المستشعر (ISO 100 = حساسية منخفضة = جودة مثالية، ISO 6400 = حساسية عالية = ضوضاء رقمية)"
      },
      amaqAlmajal: {
        dahel: "خلفية ضبابية",
        amiq: "كل شيء حاد"
      }
    },
    composition: {
      qawaeed: {
        alathlath: "تقسيم الصورة إلى 9 أجزاء متساوية",
        alkhututAlmudira: "توجيه النظر",
        alitram: "اختيار العناصر المضمنة",
        nuqtatAlnazar: "زاوية التصوير"
      },
      anwaAlqat: {
        wasi: "إطار واسع، البيئة",
        mutawasit: "الموضوع كاملاً",
        qarib: "تفاصيل الموضوع",
        qaribJiddan: "لقطة ضيقة جداً"
      }
    },
    equipment: {
      kamirat: {
        dslr: "مرآة، منظار بصري",
        bilaMirat: "بدون مرآة، منظار إلكتروني",
        jisr: "زووم ثابت، متوسطة",
        mdamaja: "صغيرة، تلقائية"
      },
      adasat: {
        wasiatAlzawiya: "< 35 مم → المناظر الطبيعية",
        qiyasi: "50 مم → متعددة الاستخدامات",
        tilifutu: "> 70 مم → الرياضة، البورتريه",
        makru: "تكبير قريب",
        baedBuriThabit: "بعد بؤري ثابت",
        zum: "بعد بؤري متغير"
      }
    },
    lumiere: {
      jawda: {
        naim: "ظلال منتشرة",
        qawi: "تباين قوي",
        tabii: "ضوء الشمس",
        masnue: "فلاش، LED"
      },
      darajatAlharara: {
        dafi: "3000K → برتقالي",
        barid: "6000K → مزرق",
        tawazunAlabyad: "ضبط الألوان"
      }
    },
    techniques: {
      burtrayh: {
        wadii: "موضع الموضوع",
        idhaatAlistudiyu: "فلاش، صندوق ناعم",
        alkhalfiya: "سياق البورتريه"
      },
      manazir: {
        almuqadima: "عنصر قريب",
        alkhalfiya: "بعيد",
        alufuq: "خط فصل السماء/الأرض"
      },
      layl: {
        taeridTawil: "تعريض ممتد",
        rasmBildu: "الرسم بالضوء",
        alduwda: "حبيبات في الإضاءة المنخفضة"
      }
    },
    postProduction: {
      barmajiyat: {
        altatwir: "معالجة RAW",
        altaswih: "تصحيحات متقدمة",
        altarkib: "تكوين الصور"
      },
      taedilat: {
        altabayun: "الفرق بين الألوان الفاتحة/الداكنة",
        altashabue: "كثافة اللون",
        alhadda: "تحسين التفاصيل",
        altazlil: "تعتيم الحواف"
      }
    },
    genres: {
      shari: "مشاهد الحياة الحضرية",
      wathaiqi: "تقرير حقيقي",
      hayatBarriya: "الحيوانات البرية",
      taam: "الطعام",
      mimari: "المباني، الهياكل",
      mujarrad: "الأشكال، الألوان"
    },
    effects: {
      bukih: "ضبابية خلفية جمالية",
      dubabiyatAlharaka: "إحساس بالسرعة",
      alzil: "موضوع داكن على خلفية فاتحة",
      alduAlkhalfi: "ضوء خلف الموضوع"
    },
    perspective: {
      zawiyatAliya: "لقطة من الأعلى",
      zawiyatMunakhifa: "لقطة من الأسفل",
      nuqtatAlzawal: "تقارب الخطوط"
    },
    formats: {
      raw: "ملف خام → جودة قصوى",
      jpeg: "مضغوط → استخدام شائع",
      png: "شفافية → الويب",
      tiff: "غير مضغوط → الطباعة"
    },
    accessories: {
      hamilThulathi: "الاستقرار",
      marashihat: "تأثيرات بصرية",
      flashKhariji: "إضاءة إضافية",
      mushilBaid: "التصوير عن بُعد"
    }
  }
}

// Helper function to get vocabulary summary for prompts
export function getVocabularySummary(language: "fr" | "en" | "ar"): string {
  const vocab = PHOTOGRAPHY_VOCABULARY[language]
  
  if (language === "fr") {
    return `Vocabulaire photographique essentiel à utiliser dans vos réponses:

**Technique de base:**
- Exposition: Ouverture (f/), Vitesse d'obturation, ISO
- Profondeur de champ: réduite (arrière-plan flou) ou grande (tout net)

**Composition:**
- Règle des tiers, lignes directrices, cadrage, point de vue
- Plans: large, moyen, gros plan, serré

**Équipement:**
- Appareils: Reflex, Hybride, Bridge, Compact
- Objectifs: Grand-angle (<35mm), Standard (50mm), Téléobjectif (>70mm), Macro, Focale fixe, Zoom

**Lumière:**
- Qualité: douce (ombres diffuses), dure (contraste marqué), naturelle, artificielle
- Température: chaud (3000K), froid (6000K), balance des blancs

**Techniques spécialisées:**
- Portrait: pose, éclairage studio, arrière-plan
- Paysage: premier plan, arrière-plan, horizon
- Nuit: pose longue, light painting, bruit

**Post-production:**
- Logiciels: développement RAW, retouche, montage
- Ajustements: contraste, saturation, netteté, vignetage

**Genres:** Photo de rue, documentaire, animalière, culinaire, architecture, abstraite

**Effets:** Bokeh, flou de mouvement, silhouette, contre-jour

**Perspective:** Plongée, contre-plongée, point de fuite

**Formats:** RAW (qualité maximale), JPEG (usage courant), PNG (web), TIFF (impression)

**Accessoires:** Trépied, filtres, flash externe, déclencheur

Utilisez ces termes de manière naturelle dans vos explications pour enrichir vos réponses.`
  }
  
  if (language === "en") {
    return `Essential photography vocabulary to use in your responses:

**Basic technique:**
- Exposure: Aperture (f/), Shutter Speed, ISO
- Depth of field: shallow (blurred background) or deep (everything sharp)

**Composition:**
- Rule of thirds, leading lines, framing, point of view
- Shot types: wide, medium, close-up, extreme close-up

**Equipment:**
- Cameras: DSLR, Mirrorless, Bridge, Compact
- Lenses: Wide-angle (<35mm), Standard (50mm), Telephoto (>70mm), Macro, Prime, Zoom

**Light:**
- Quality: soft (diffused shadows), hard (strong contrast), natural, artificial
- Temperature: warm (3000K), cool (6000K), white balance

**Specialized techniques:**
- Portrait: pose, studio lighting, background
- Landscape: foreground, background, horizon
- Night: long exposure, light painting, noise

**Post-production:**
- Software: RAW development, retouching, compositing
- Adjustments: contrast, saturation, sharpness, vignetting

**Genres:** Street, documentary, wildlife, food, architecture, abstract photography

**Effects:** Bokeh, motion blur, silhouette, backlighting

**Perspective:** High angle, low angle, vanishing point

**Formats:** RAW (maximum quality), JPEG (common use), PNG (web), TIFF (printing)

**Accessories:** Tripod, filters, external flash, remote trigger

Use these terms naturally in your explanations to enrich your responses.`
  }
  
  if (language === "ar") {
    return `المفردات الأساسية للتصوير الفوتوغرافي لاستخدامها في ردودك:

**التقنية الأساسية:**
- التعريض: الفتحة (f/)، سرعة الغالق، ISO
- عمق المجال: ضحل (خلفية ضبابية) أو عميق (كل شيء حاد)

**التكوين:**
- قاعدة الأثلاث، الخطوط الموجهة، الإطار، نقطة النظر
- أنواع اللقطات: واسعة، متوسطة، قريبة، قريبة جداً

**المعدات:**
- الكاميرات: DSLR، بدون مرآة، الجسر، المدمجة
- العدسات: واسعة الزاوية (<35 مم)، قياسية (50 مم)، تليفوتو (>70 مم)، ماكرو، ببعد بؤري ثابت، زووم

**الضوء:**
- الجودة: ناعم (ظلال منتشرة)، قوي (تباين قوي)، طبيعي، اصطناعي
- درجة الحرارة: دافئ (3000K)، بارد (6000K)، توازن الأبيض

**التقنيات المتخصصة:**
- البورتريه: الوضعية، إضاءة الاستوديو، الخلفية
- المناظر الطبيعية: المقدمة، الخلفية، الأفق
- الليل: تعريض طويل، رسم بالضوء، الضوضاء

**ما بعد الإنتاج:**
- البرمجيات: تطوير RAW، التصحيح، التركيب
- التعديلات: التباين، التشبع، الحدة، التظليل

**الأنواع:** الشارع، الوثائقي، الحياة البرية، الطعام، العمارة، التجريدي

**التأثيرات:** البوكيه، ضبابية الحركة، الظل، الضوء الخلفي

**المنظور:** زاوية عالية، زاوية منخفضة، نقطة التلاشي

**الصيغ:** RAW (جودة قصوى)، JPEG (استخدام شائع)، PNG (الويب)، TIFF (الطباعة)

**الملحقات:** الحامل الثلاثي، المرشحات، الفلاش الخارجي، المشغل عن بُعد

استخدم هذه المصطلحات بشكل طبيعي في شرحك لإثراء ردودك.`
  }
  
  return ""
}

