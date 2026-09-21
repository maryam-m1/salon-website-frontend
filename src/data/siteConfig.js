// ============================================================
//  SAB CONTENT YAHAN SE BADLO  (all editable content lives here)
//  Har text { en, ur } mein hai. Prices PKR mein hain.
// ============================================================

export const site = {
  brand: { en: 'Zarnigar', ur: 'زرنگار' },
  descriptor: { en: 'Bridal & Beauty Studio', ur: 'برائیڈل اینڈ بیوٹی اسٹوڈیو' },
  tagline: { en: 'Where every look becomes a memory', ur: 'جہاں ہر روپ ایک یاد بن جائے' },
  heroSub: {
    en: 'Bridal makeup, hair, skin and mehndi in a private, ladies-only studio in DHA Phase 5, Lahore.',
    ur: 'ڈی ایچ اے فیز 5 لاہور کے خواتین کے لیے مخصوص پرائیویٹ اسٹوڈیو میں برائیڈل میک اپ، ہیئر، اسکن اور مہندی۔',
  },
  area: { en: 'DHA Phase 5, Lahore', ur: 'ڈی ایچ اے فیز 5، لاہور' },
  address: {
    en: 'Plot 12-C, Main Boulevard, DHA Phase 5, Lahore',
    ur: 'پلاٹ 12-سی، مین بلیوارڈ، ڈی ایچ اے فیز 5، لاہور',
  },
  whatsapp: '03001234567', // <-- apna WhatsApp number
  phone: '03001234567', // <-- apna phone number
  displayPhone: '0300 1234567',
  instagram: 'zarnigar.studio', // <-- Instagram handle (without @)
  hours: {
    open: 11, // 11 am
    close: 21, // 9 pm
    tz: 'Asia/Karachi',
    label: { en: '11 am to 9 pm, every day', ur: 'روزانہ صبح 11 بجے سے رات 9 بجے تک' },
  },
  map: { lat: 31.4697, lng: 74.4113 }, // <-- salon ki location
  offer: {
    ends: '2026-11-30T23:59:59+05:00', // <-- offer khatam hone ki date
    text: {
      en: 'Winter wedding season: book your bridal date before 30 November and get a free trial makeup.',
      ur: 'ونٹر ویڈنگ سیزن: 30 نومبر سے پہلے برائیڈل بکنگ کروائیں اور ٹرائل میک اپ مفت پائیں۔',
    },
  },
}

export const nav = [
  { id: 'services', label: { en: 'Services', ur: 'سروسز' } },
  { id: 'journey', label: { en: 'Bridal', ur: 'برائیڈل' } },
  { id: 'packages', label: { en: 'Packages', ur: 'پیکجز' } },
  { id: 'gallery', label: { en: 'Gallery', ur: 'گیلری' } },
  { id: 'team', label: { en: 'Team', ur: 'ٹیم' } },
  { id: 'contact', label: { en: 'Contact', ur: 'رابطہ' } },
]

export const trust = [
  { icon: 'lock', en: 'Ladies-only, private rooms', ur: 'صرف خواتین، پرائیویٹ کمرے' },
  { icon: 'sparkles', en: 'Sanitised, single-use tools', ur: 'جراثیم سے پاک، ایک بار استعمال کے اوزار' },
  { icon: 'shield', en: 'Patch test before every skin service', ur: 'ہر اسکن سروس سے پہلے پیچ ٹیسٹ' },
  { icon: 'gem', en: 'Trusted international brands', ur: 'معتبر عالمی برانڈز' },
  { icon: 'heart', en: '500+ brides styled', ur: '500 سے زائد دلہنیں تیار کیں' },
]

export const serviceTabs = [
  { id: 'bridal', label: { en: 'Bridal', ur: 'برائیڈل' } },
  { id: 'hair', label: { en: 'Hair', ur: 'ہیئر' } },
  { id: 'skin', label: { en: 'Skin', ur: 'اسکن' } },
  { id: 'nails', label: { en: 'Nails', ur: 'ناخن' } },
  { id: 'mehndi', label: { en: 'Mehndi', ur: 'مہندی' } },
  { id: 'party', label: { en: 'Party Glam', ur: 'پارٹی گلیم' } },
]

export const services = {
  bridal: [
    { name: { en: 'Bridal makeup', ur: 'برائیڈل میک اپ' }, desc: { en: 'HD or airbrush, long-wear, photo-ready.', ur: 'ایچ ڈی یا ایئربرش، دیر پا اور فوٹو کے لیے بہترین۔' }, price: 45000 },
    { name: { en: 'Trial makeup', ur: 'ٹرائل میک اپ' }, desc: { en: 'Try your look weeks before the day.', ur: 'خاص دن سے پہلے اپنا روپ آزمائیں۔' }, price: 8000 },
    { name: { en: 'Bridal hair styling', ur: 'برائیڈل ہیئر اسٹائلنگ' }, desc: { en: 'Buns, braids, waves with dupatta setting.', ur: 'جوڑا، چوٹی، ویوز اور دوپٹہ سیٹنگ۔' }, price: 12000 },
  ],
  hair: [
    { name: { en: 'Cut and blow-dry', ur: 'کٹ اور بلو ڈرائی' }, desc: { en: 'Shape, layers and a smooth finish.', ur: 'شیپ، لیئرز اور نرم فنش۔' }, price: 3500 },
    { name: { en: 'Keratin treatment', ur: 'کیراٹن ٹریٹمنٹ' }, desc: { en: 'Frizz-free shine that lasts months.', ur: 'مہینوں چلنے والی چمک، بغیر فریز۔' }, price: 18000 },
    { name: { en: 'Colour and highlights', ur: 'کلر اور ہائی لائٹس' }, desc: { en: 'Balayage, global colour, gloss.', ur: 'بالیاژ، گلوبل کلر اور گلوس۔' }, price: 12000 },
  ],
  skin: [
    { name: { en: 'Signature facial', ur: 'سگنیچر فیشل' }, desc: { en: 'Deep cleanse, massage and mask.', ur: 'گہری صفائی، مساج اور ماسک۔' }, price: 6500 },
    { name: { en: 'Hydra glow', ur: 'ہائیڈرا گلو' }, desc: { en: 'Hydrating treatment for instant glow.', ur: 'فوری نکھار کے لیے ہائیڈریٹنگ ٹریٹمنٹ۔' }, price: 9500 },
    { name: { en: 'Bridal skin prep (4 visits)', ur: 'برائیڈل اسکن پریپ (4 وزٹ)' }, desc: { en: 'A month of care before the wedding.', ur: 'شادی سے پہلے ایک مہینے کی دیکھ بھال۔' }, price: 28000 },
  ],
  nails: [
    { name: { en: 'Manicure and pedicure', ur: 'مینیکیور اور پیڈیکیور' }, desc: { en: 'Soak, scrub, shape and polish.', ur: 'بھگونا، اسکرب، شیپ اور پالش۔' }, price: 4500 },
    { name: { en: 'Gel polish', ur: 'جیل پالش' }, desc: { en: 'Chip-free colour for two weeks.', ur: 'دو ہفتے تک نہ اترنے والا رنگ۔' }, price: 3000 },
    { name: { en: 'Nail art', ur: 'نیل آرٹ' }, desc: { en: 'Hand-painted, stones, gold foil.', ur: 'ہاتھ سے بنے ڈیزائن، اسٹونز اور گولڈ فوائل۔' }, price: 2500 },
  ],
  mehndi: [
    { name: { en: 'Bridal mehndi', ur: 'برائیڈل مہندی' }, desc: { en: 'Full hands and feet, detailed and dark.', ur: 'مکمل ہاتھ اور پاؤں، باریک اور گہری۔' }, price: 15000 },
    { name: { en: 'Arabic mehndi', ur: 'عربی مہندی' }, desc: { en: 'Bold, flowing, quick to apply.', ur: 'نمایاں، بہتی ہوئی اور جلدی لگنے والی۔' }, price: 3000 },
    { name: { en: 'Guest mehndi', ur: 'گیسٹ مہندی' }, desc: { en: 'Simple designs for family and friends.', ur: 'گھر والوں اور سہیلیوں کے لیے سادہ ڈیزائن۔' }, price: 1500 },
  ],
  party: [
    { name: { en: 'Party makeup', ur: 'پارٹی میک اپ' }, desc: { en: 'For dawats, engagements and dinners.', ur: 'دعوت، منگنی اور ڈنر کے لیے۔' }, price: 12000 },
    { name: { en: 'Party hair', ur: 'پارٹی ہیئر' }, desc: { en: 'Curls, sleek, half-up or a soft bun.', ur: 'کرلز، سلیک، ہاف اپ یا نرم جوڑا۔' }, price: 5000 },
    { name: { en: 'Saree and dupatta draping', ur: 'ساڑھی اور دوپٹہ ڈریپنگ' }, desc: { en: 'Neat pleats and secure pinning.', ur: 'صاف پلیٹس اور مضبوط پننگ۔' }, price: 2500 },
  ],
}

export const packages = [
  {
    id: 'signature',
    name: { en: 'Signature', ur: 'سگنیچر' },
    price: 55000,
    blurb: { en: 'A complete, elegant look for one event.', ur: 'ایک تقریب کے لیے مکمل اور نفیس روپ۔' },
    items: [
      { en: 'Bridal makeup (HD)', ur: 'برائیڈل میک اپ (ایچ ڈی)' },
      { en: 'Hair styling with dupatta setting', ur: 'ہیئر اسٹائلنگ اور دوپٹہ سیٹنگ' },
      { en: 'Basic skin prep facial', ur: 'بنیادی اسکن پریپ فیشل' },
      { en: 'Touch-up kit', ur: 'ٹچ اپ کٹ' },
    ],
  },
  {
    id: 'luxe',
    name: { en: 'Luxe', ur: 'لَکس' },
    price: 85000,
    popular: true,
    blurb: { en: 'Our most loved package for the Barat day.', ur: 'بارات کے دن کے لیے ہمارا سب سے پسندیدہ پیکج۔' },
    items: [
      { en: 'Airbrush bridal makeup', ur: 'ایئربرش برائیڈل میک اپ' },
      { en: 'Premium hair styling and extensions', ur: 'پریمیم ہیئر اسٹائلنگ اور ایکسٹینشنز' },
      { en: 'Trial makeup session', ur: 'ٹرائل میک اپ سیشن' },
      { en: 'Manicure and pedicure', ur: 'مینیکیور اور پیڈیکیور' },
      { en: 'Bridal mehndi (hands)', ur: 'برائیڈل مہندی (ہاتھ)' },
    ],
  },
  {
    id: 'royal',
    name: { en: 'Royal', ur: 'رائل' },
    price: 125000,
    blurb: { en: 'Mehndi, Barat and Walima, all three days.', ur: 'مہندی، بارات اور ولیمہ، تینوں دن۔' },
    items: [
      { en: 'Three looks: Mehndi, Barat, Walima', ur: 'تین روپ: مہندی، بارات، ولیمہ' },
      { en: 'Airbrush makeup and full hair styling', ur: 'ایئربرش میک اپ اور مکمل ہیئر اسٹائلنگ' },
      { en: '4-visit bridal skin prep', ur: '4 وزٹ برائیڈل اسکن پریپ' },
      { en: 'Full hands and feet mehndi', ur: 'مکمل ہاتھ اور پاؤں کی مہندی' },
      { en: 'Two trial sessions', ur: 'دو ٹرائل سیشن' },
    ],
  },
]

export const home = {
  fee: 10000,
  areas: ['DHA', 'Bahria Town', 'Gulberg', 'Model Town', 'Johar Town', 'Cantt'],
}

export const journey = [
  {
    id: 'mehndi',
    dark: true,
    bg: '#2E3B1B',
    accent: '#E6B93F',
    colors: ['#E6B93F', '#8DA33A', '#C8642B'],
    title: { en: 'Mehndi', ur: 'مہندی' },
    mood: { en: 'Marigold and green', ur: 'گیندے کا پیلا اور ہرا' },
    desc: {
      en: 'Fresh, dewy skin with a soft glow, marigold tones on the eyes and a light hairstyle that moves when you dance.',
      ur: 'تازہ اور نرم چمکتی جلد، آنکھوں پر گیندے کے رنگ اور ہلکا ہیئر اسٹائل جو رقص میں ساتھ چلے۔',
    },
    pkg: 'signature',
  },
  {
    id: 'barat',
    dark: true,
    bg: '#4A0E1F',
    accent: '#C9A24B',
    colors: ['#B3202F', '#C9A24B', '#7A1F3D'],
    title: { en: 'Barat', ur: 'بارات' },
    mood: { en: 'Red and gold', ur: 'سرخ اور سنہری' },
    desc: {
      en: 'The classic bride: rich red lips, defined eyes, gold highlights and a structured hairstyle that carries the heavy dupatta.',
      ur: 'کلاسک دلہن: گہرے سرخ ہونٹ، نمایاں آنکھیں، سنہری ہائی لائٹ اور بھاری دوپٹے کو سنبھالنے والا مضبوط ہیئر اسٹائل۔',
    },
    pkg: 'luxe',
  },
  {
    id: 'walima',
    dark: false,
    bg: '#F2D7D5',
    accent: '#7A1F3D',
    colors: ['#E8B4B8', '#B9C4A8', '#F6E6C8'],
    title: { en: 'Walima', ur: 'ولیمہ' },
    mood: { en: 'Pastel and soft', ur: 'ہلکے پیسٹل رنگ' },
    desc: {
      en: 'Light and graceful: peach-rose cheeks, soft-focus eyes, pearls in the hair and skin that looks like your best day off.',
      ur: 'ہلکا اور باوقار: آڑو گلابی گال، نرم آنکھیں، بالوں میں موتی اور ایسی جلد جو آپ کے سب سے پرسکون دن جیسی لگے۔',
    },
    pkg: 'signature',
  },
]

export const quiz = {
  questions: [
    {
      id: 'occasion',
      q: { en: 'What are we getting ready for?', ur: 'کس موقع کی تیاری ہے؟' },
      options: [
        { id: 'mehndi', en: 'Mehndi', ur: 'مہندی' },
        { id: 'barat', en: 'Barat', ur: 'بارات' },
        { id: 'walima', en: 'Walima', ur: 'ولیمہ' },
        { id: 'party', en: 'Party or engagement', ur: 'پارٹی یا منگنی' },
      ],
    },
    {
      id: 'undertone',
      q: { en: 'What is your skin undertone?', ur: 'آپ کی جلد کا انڈر ٹون کیا ہے؟' },
      options: [
        { id: 'warm', en: 'Warm (golden, olive)', ur: 'گرم (سنہری، زیتونی)' },
        { id: 'cool', en: 'Cool (pink, rosy)', ur: 'ٹھنڈا (گلابی)' },
        { id: 'neutral', en: 'Not sure or neutral', ur: 'معلوم نہیں یا نیوٹرل' },
      ],
    },
    {
      id: 'mood',
      q: { en: 'Which mood feels like you?', ur: 'کون سا انداز آپ جیسا ہے؟' },
      options: [
        { id: 'soft', en: 'Soft and natural', ur: 'نرم اور قدرتی' },
        { id: 'classic', en: 'Classic and rich', ur: 'کلاسک اور بھرپور' },
        { id: 'bold', en: 'Bold and dramatic', ur: 'نمایاں اور ڈرامائی' },
      ],
    },
  ],
  palettes: {
    warm: { en: 'golden bronze, coral and rust', ur: 'سنہری کانسی، مرجانی اور زنگ رنگ' },
    cool: { en: 'rose, mauve and silver champagne', ur: 'گلابی، موو اور چاندی جیسا شیمپین' },
    neutral: { en: 'peach, dusty rose and soft gold', ur: 'آڑو، ہلکا گلابی اور نرم سنہری' },
  },
  moods: {
    soft: { en: 'a soft, dewy finish', ur: 'نرم اور تازہ فنش' },
    classic: { en: 'a classic, rich finish', ur: 'کلاسک اور بھرپور فنش' },
    bold: { en: 'a bold, dramatic finish', ur: 'نمایاں اور ڈرامائی فنش' },
  },
  moodPackage: { soft: 'signature', classic: 'luxe', bold: 'royal' },
}

export const beforeAfter = [
  { id: 'ba1', label: { en: 'Bridal makeover', ur: 'برائیڈل میک اوور' } },
  { id: 'ba2', label: { en: 'Party glam', ur: 'پارٹی گلیم' } },
]

export const galleryFilters = [
  { id: 'all', label: { en: 'All', ur: 'سب' } },
  { id: 'bridal', label: { en: 'Bridal', ur: 'برائیڈل' } },
  { id: 'party', label: { en: 'Party', ur: 'پارٹی' } },
  { id: 'hair', label: { en: 'Hair', ur: 'ہیئر' } },
  { id: 'mehndi', label: { en: 'Mehndi', ur: 'مہندی' } },
  { id: 'nails', label: { en: 'Nails', ur: 'ناخن' } },
]

// ratio: height/width, tone: placeholder colour theme
export const gallery = [
  { id: 'g1', cat: 'bridal', ratio: 1.3, tone: 'maroon', alt: { en: 'Barat bride in red and gold', ur: 'سرخ اور سنہری بارات کی دلہن' } },
  { id: 'g2', cat: 'mehndi', ratio: 1, tone: 'olive', alt: { en: 'Detailed bridal mehndi', ur: 'باریک برائیڈل مہندی' } },
  { id: 'g3', cat: 'party', ratio: 1.45, tone: 'rose', alt: { en: 'Evening party makeup', ur: 'شام کی پارٹی کا میک اپ' } },
  { id: 'g4', cat: 'hair', ratio: 1.1, tone: 'gold', alt: { en: 'Braided bridal hairstyle', ur: 'چوٹی والا برائیڈل ہیئر اسٹائل' } },
  { id: 'g5', cat: 'bridal', ratio: 1.5, tone: 'blush', alt: { en: 'Walima bride, soft pastel look', ur: 'ولیمہ کی دلہن، ہلکا پیسٹل روپ' } },
  { id: 'g6', cat: 'nails', ratio: 0.9, tone: 'rose', alt: { en: 'Gold foil nail art', ur: 'گولڈ فوائل نیل آرٹ' } },
  { id: 'g7', cat: 'hair', ratio: 1.35, tone: 'maroon', alt: { en: 'Soft curls for a dawat', ur: 'دعوت کے لیے نرم کرلز' } },
  { id: 'g8', cat: 'bridal', ratio: 1.05, tone: 'gold', alt: { en: 'Bridal eyes with gold shimmer', ur: 'سنہری چمک والی دلہن کی آنکھیں' } },
  { id: 'g9', cat: 'mehndi', ratio: 1.4, tone: 'olive', alt: { en: 'Arabic mehndi on hands', ur: 'ہاتھوں پر عربی مہندی' } },
  { id: 'g10', cat: 'party', ratio: 1.2, tone: 'blush', alt: { en: 'Engagement glam', ur: 'منگنی کا گلیم' } },
]

export const team = [
  {
    id: 't1',
    name: { en: 'Ayesha Khan', ur: 'عائشہ خان' },
    role: { en: 'Lead bridal artist', ur: 'لیڈ برائیڈل آرٹسٹ' },
    years: 12,
    specialty: { en: 'Airbrush and traditional bridal', ur: 'ایئربرش اور روایتی برائیڈل' },
    tone: 'maroon',
  },
  {
    id: 't2',
    name: { en: 'Hina Rauf', ur: 'حنا رؤف' },
    role: { en: 'Hair and colour', ur: 'ہیئر اور کلر' },
    years: 9,
    specialty: { en: 'Bridal hairstyles, balayage', ur: 'برائیڈل ہیئر اسٹائل، بالیاژ' },
    tone: 'gold',
  },
  {
    id: 't3',
    name: { en: 'Sana Tariq', ur: 'ثنا طارق' },
    role: { en: 'Skin and facials', ur: 'اسکن اور فیشل' },
    years: 8,
    specialty: { en: 'Bridal skin prep, hydra glow', ur: 'برائیڈل اسکن پریپ، ہائیڈرا گلو' },
    tone: 'rose',
  },
]

export const reviews = [
  { lang: 'en', name: 'Mahnoor S.', where: 'Barat, DHA', stars: 5, text: 'My makeup lasted from 2 pm nikah to 1 am rukhsati without a single touch-up. Ayesha understood exactly what I wanted.' },
  { lang: 'ur', name: 'فاطمہ ز.', where: 'ولیمہ، گلبرگ', stars: 5, text: 'بہت پرسکون ماحول تھا اور پرائیویسی کا پورا خیال رکھا گیا۔ میرا ولیمہ کا لُک بالکل ویسا بنا جیسا میں نے سوچا تھا۔' },
  { lang: 'en', name: 'Rimsha A.', where: 'Mehndi, Bahria Town', stars: 5, text: 'They came to my home at 7 am, on time, with everything set up. My whole family got ready there.' },
  { lang: 'ur', name: 'ایمن ع.', where: 'ٹرائل کے بعد بکنگ', stars: 5, text: 'ٹرائل کے بعد ہی مجھے یقین آ گیا۔ انہوں نے میری جلد کے حساب سے شیڈ چنے اور ہر چیز سمجھائی۔' },
  { lang: 'en', name: 'Zainab H.', where: 'Party glam', stars: 4, text: 'Loved the hydra glow facial before my sister’s wedding. Skin looked amazing in photos.' },
]

export const faqs = [
  {
    q: { en: 'How much does bridal makeup cost?', ur: 'برائیڈل میک اپ کی قیمت کیا ہے؟' },
    a: { en: 'Bridal makeup starts from Rs. 45,000. Full packages with hair, skin prep and mehndi start from Rs. 55,000. Send us your date on WhatsApp for an exact quote.', ur: 'برائیڈل میک اپ 45,000 روپے سے شروع ہوتا ہے۔ ہیئر، اسکن پریپ اور مہندی کے ساتھ مکمل پیکج 55,000 روپے سے شروع ہوتے ہیں۔ صحیح قیمت کے لیے واٹس ایپ پر اپنی تاریخ بھیجیں۔' },
  },
  {
    q: { en: 'How early should I book?', ur: 'کتنا پہلے بکنگ کروانی چاہیے؟' },
    a: { en: 'We suggest 6 to 8 weeks before your date, and 3 months in wedding season. A 50% advance confirms your booking.', ur: 'اپنی تاریخ سے 6 سے 8 ہفتے پہلے، اور ویڈنگ سیزن میں 3 مہینے پہلے۔ 50 فیصد ایڈوانس سے بکنگ پکی ہو جاتی ہے۔' },
  },
  {
    q: { en: 'Can I get a trial makeup?', ur: 'کیا ٹرائل میک اپ ہو سکتا ہے؟' },
    a: { en: 'Yes. A trial costs Rs. 8,000 and is adjusted from your bridal total if you book with us.', ur: 'جی ہاں۔ ٹرائل 8,000 روپے کا ہے اور ہم سے بکنگ کرنے پر برائیڈل رقم میں منہا ہو جاتا ہے۔' },
  },
  {
    q: { en: 'Do you offer home service?', ur: 'کیا آپ گھر پر سروس دیتی ہیں؟' },
    a: { en: 'Yes, bridal service at your home in DHA, Bahria Town, Gulberg, Model Town, Johar Town and Cantt for an extra Rs. 10,000.', ur: 'جی ہاں، ڈی ایچ اے، بحریہ ٹاؤن، گلبرگ، ماڈل ٹاؤن، جوہر ٹاؤن اور کینٹ میں آپ کے گھر پر برائیڈل سروس 10,000 روپے اضافی میں دستیاب ہے۔' },
  },
  {
    q: { en: 'Is the studio ladies-only?', ur: 'کیا اسٹوڈیو صرف خواتین کے لیے ہے؟' },
    a: { en: 'Always. Our team is all women and we have private rooms, so you can be comfortable without a hijab.', ur: 'ہمیشہ۔ ہماری پوری ٹیم خواتین پر مشتمل ہے اور پرائیویٹ کمرے موجود ہیں تاکہ آپ بغیر حجاب کے آرام سے رہ سکیں۔' },
  },
]

export const timeSlots = ['11:00 am', '1:00 pm', '3:00 pm', '5:00 pm', '7:00 pm']

export const voucherAmounts = [5000, 10000, 25000]
