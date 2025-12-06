import React from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "10 Signs You Need an Emergency Dentist Immediately",
    excerpt: "Not sure if your toothache is an emergency? Here are the critical signs that mean you shouldn't wait another minute.",
    category: "Emergencies",
    date: "Oct 24, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">Dental emergencies can happen to anyone, at any time—often when you least expect them. Whether it's a sudden crack while eating popcorn or a dull ache that wakes you up at 3 AM, knowing when to seek professional help is crucial. Ignoring dental pain or injury can lead to serious complications, including tooth loss, spreading infection, and expensive restorative treatments down the line.</p>
      
      <p>At our Central London clinic, we see patients every day who waited too long, turning a simple fix into a complex procedure. To help you make the right decision, we have compiled a comprehensive list of the top 10 signs that indicate you need to see an emergency dentist immediately.</p>

      <h3>1. Severe, Unrelenting Toothache</h3>
      <p>Pain is your body's way of saying something is wrong. While a mild toothache might be caused by a piece of food stuck between your teeth, severe, throbbing pain is a red flag. If your toothache is keeping you awake at night, radiating to your jaw, ear, or neck, or if painkillers like Ibuprofen or Paracetamol are offering little to no relief, you have a dental emergency.</p>
      <p>This type of pain usually indicates that the nerve of the tooth is dying or infected (pulpitis). Without treatment, the infection will turn into an abscess. We can often relieve this pain in minutes with emergency extirpation (removing the nerve).</p>

      <h3>2. Swollen Jaw or Face</h3>
      <p>Facial swelling is one of the most dangerous symptoms in dentistry. It almost always indicates a dental abscess or a severe infection in the bone. If the swelling is visible on your cheek or jawline, the infection is spreading into the surrounding tissues.</p>
      <p><strong>Warning:</strong> If the swelling extends to your eye or down your neck, or if you have difficulty breathing or swallowing, this is a life-threatening emergency. You must visit A&E or call 999. For localized swelling, call us immediately for drainage and antibiotics.</p>

      <h3>3. A Knocked-Out (Avulsed) Tooth</h3>
      <p>This is the "golden hour" scenario of dentistry. If an adult tooth is knocked out completely, there is a strict time limit for saving it. If you can see a dentist within 30 to 60 minutes, there is a high chance we can re-implant the tooth successfully.</p>
      <p><strong>What to do:</strong> Pick the tooth up by the crown (the white part), never the root. Rinse it gently with milk if it's dirty, but do not scrub it. Try to put it back in the socket. If you can't, keep it in a container of milk or your own saliva and run to the dentist.</p>

      <h3>4. Bleeding That Won't Stop</h3>
      <p>It is normal for gums to bleed slightly if you have gum disease, or for an extraction site to ooze for a short while. However, if you have had a tooth pulled or suffered a mouth injury and the bleeding fills your mouth or doesn't stop after 20 minutes of applying firm pressure with a gauze, you need emergency care.</p>
      <p>Uncontrolled bleeding can be dangerous. We have specialized agents and sutures (stitches) to stop bleeding instantly.</p>

      <h3>5. Loose Adult Teeth</h3>
      <p>Adult teeth should feel rock solid. If you notice a tooth feeling loose, wobbly, or moving when you touch it with your tongue, something is structurally wrong. This could be due to facial trauma (a sports injury or fall) or advanced periodontal (gum) disease where the bone supporting the tooth has been lost.</p>
      <p>Prompt splinting can often save a loose tooth caused by trauma. If it's gum disease, early intervention is key to keeping your teeth.</p>

      <h3>6. Dental Abscess (Pimples on Gums)</h3>
      <p>Have you noticed a small, pimple-like bump on your gum? This is often a "fistula" or sinus tract. It means there is pus draining from an infection at the root of a tooth. You might notice a bad taste in your mouth or pus releasing when you press it.</p>
      <p>Even if it doesn't hurt, the infection is eating away at your jawbone. It will not heal on its own and requires a root canal or extraction.</p>

      <h3>7. Extreme Sensitivity</h3>
      <p>Brief sensitivity to cold water is common. However, if you experience a sharp, shooting pain that lingers for minutes or hours after drinking something hot or cold, or if breathing in cold air makes you wince, you likely have a cracked tooth or exposed nerve.</p>

      <h3>8. Metal Taste in Your Mouth</h3>
      <p>If you have old metal (amalgam) fillings and suddenly taste metal or notice a loose feeling in the tooth, the filling may have cracked or fallen out. Loose fillings allow bacteria to seep underneath, causing rapid decay deep inside the tooth structure.</p>

      <h3>9. Locked Jaw or Popping Noises</h3>
      <p>If you wake up and cannot open your mouth wide (trismus), or if your jaw locks open or shut, this is a temporomandibular joint (TMJ) emergency. It can be incredibly painful and distressing. We can help manipulate the jaw back into place or prescribe muscle relaxants and splint therapy.</p>

      <h3>10. Broken Orthodontics</h3>
      <p>If you wear braces and a wire snaps, it can stab your cheek, gums, or tongue, causing ulcers and infection. While not always a threat to the tooth, the soft tissue trauma makes it an emergency. We can clip the wire or bond the bracket back in place to make you comfortable.</p>

      <h3>Don't Wait – Contact Us Today</h3>
      <p>If you recognize any of these signs, please do not "wait and see." Dental problems rarely resolve themselves; they only get more expensive and painful. Our team at Emergency Dentist London is here to help you. We offer same-day appointments, convenient evening hours, and compassionate care for nervous patients. Call us now at <strong>020 3137 6356</strong>.</p>
    `
  },
  {
    id: '2',
    title: "Wisdom Tooth Pain: When to Remove Them? A Complete Guide",
    excerpt: "Wisdom teeth can cause severe pain and infection. Learn the symptoms of impaction and pericoronitis and your options.",
    category: "Wisdom Teeth",
    date: "Oct 20, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">Wisdom teeth, or third molars, are the last set of adult teeth to emerge, typically appearing between the ages of 17 and 25. For some lucky individuals, they grow in straight and cause no issues. However, for the majority of people, wisdom teeth can be a source of significant pain, infection, and dental complications.</p>
      
      <p>At our London clinic, wisdom tooth pain is one of the most common reasons patients seek emergency care. But how do you know if your pain is temporary growing pains or a sign that the tooth needs to come out? This guide explores everything you need to know about wisdom teeth.</p>

      <h3>Why Do Wisdom Teeth Cause Pain?</h3>
      <p>The primary reason for wisdom tooth pain is a lack of space. By the time these teeth erupt, the rest of your 28 adult teeth are already established. There simply isn't enough room in the jaw for the wisdom teeth to squeeze in. This leads to them becoming <strong>impacted</strong>.</p>
      
      <ul>
        <li><strong>Mesial Impaction:</strong> The tooth grows angled forward towards the front of the mouth.</li>
        <li><strong>Vertical Impaction:</strong> The tooth grows straight down but gets stuck under the gum.</li>
        <li><strong>Horizontal Impaction:</strong> The tooth grows sideways at 90 degrees, pushing into the roots of the adjacent molar.</li>
      </ul>

      <h3>What is Pericoronitis?</h3>
      <p>The most common emergency associated with wisdom teeth is <strong>pericoronitis</strong>. When a wisdom tooth only partially breaks through the gum, a flap of gum tissue (operculum) remains over part of the tooth. Food and bacteria get trapped under this flap, which is almost impossible to clean with a toothbrush.</p>
      <p>This trapped bacteria causes the gum to become infected, swollen, and extremely painful. You may find it difficult to bite down because the opposing upper tooth bites onto the swollen gum below.</p>

      <h3>Symptoms That You Need an Extraction</h3>
      <p>While we always try to save teeth, wisdom teeth are often "non-functional" and cause more harm than good. You likely need an extraction if you experience:</p>
      
      <h4>1. Recurring Infection</h4>
      <p>If you have had multiple episodes of pericoronitis (gum infection) treated with antibiotics, the problem will keep returning until the source (the tooth) is removed.</p>

      <h4>2. Damage to Adjacent Teeth</h4>
      <p>An impacted wisdom tooth pushes against the second molar in front of it. This pressure can cause resorption (dissolving) of the healthy tooth's root or cause a cavity to form in an area that cannot be filled.</p>

      <h4>3. Cysts and Tumors</h4>
      <p>Wisdom teeth grow in a sac within the jawbone. If the sac fills with fluid, it forms a cyst that can damage the jawbone, teeth, and nerves. Though rare, benign tumors can also develop.</p>

      <h4>4. Severe Pain and Trismus</h4>
      <p>If the infection spreads to the muscles of the jaw, you may develop trismus (lockjaw), making it difficult or impossible to open your mouth to eat or speak.</p>

      <h3>The Extraction Procedure: What to Expect</h3>
      <p>Many patients are terrified of the idea of wisdom tooth removal, but modern dentistry makes it a routine and manageable procedure. At our clinic, we prioritize your comfort.</p>
      
      <p><strong>Simple Extraction:</strong> If the tooth has fully erupted, it can be removed in minutes, similar to any other tooth. You will feel pressure, but no pain.</p>
      
      <p><strong>Surgical Extraction:</strong> If the tooth is impacted under the gum or bone, a minor surgical procedure is required. We make a small incision in the gum, may remove a small amount of bone to free the tooth, and sometimes divide the tooth into smaller pieces for easier removal. Stitches are usually placed to help healing.</p>

      <h3>Recovery and Aftercare</h3>
      <p>Recovery depends on the complexity of the extraction. Most people experience swelling and discomfort for 3-5 days.</p>
      <ul>
        <li><strong>Rest:</strong> Take it easy for 24 hours. No heavy lifting or gym.</li>
        <li><strong>Ice Packs:</strong> Apply to the outside of the face to reduce swelling.</li>
        <li><strong>Soft Diet:</strong> Stick to yogurt, soup, mashed potatoes, and smoothies (no straws!).</li>
        <li><strong>Cleanliness:</strong> Keep the mouth clean with warm salt water rinses starting 24 hours <em>after</em> surgery.</li>
      </ul>

      <p>If you are suffering from wisdom tooth pain, don't suffer in silence. The infection can spread to your throat and become dangerous. Contact Emergency Dentist London today for an assessment and X-ray.</p>
    `
  },
  {
    id: '3',
    title: "Root Canal vs. Extraction: Saving Your Natural Tooth",
    excerpt: "Terrified of a root canal? It's actually the best way to get out of pain and keep your natural tooth. Here is why you should choose it.",
    category: "Treatments",
    date: "Oct 18, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">When faced with a severely infected or painful tooth, patients often ask us: "Can't you just pull it out?" The desire to end the pain immediately is understandable. However, as dental professionals, our goal is always to save your natural teeth whenever possible. The procedure to do this is the infamous—but misunderstood—<strong>Root Canal Treatment</strong>.</p>

      <p>In this article, we will debunk the myths surrounding root canals, compare them to extractions, and explain why saving your tooth is usually the best long-term investment for your oral health.</p>

      <h3>What is a Root Canal?</h3>
      <p>Inside every tooth, beneath the white enamel and the hard dentin, is a soft tissue called the <strong>pulp</strong>. The pulp contains blood vessels, nerves, and connective tissue. When a tooth has a deep cavity, a crack, or trauma, bacteria can enter the pulp, causing it to become infected and eventually die.</p>
      <p>This infection builds up pressure inside the tooth (causing severe pain) and can form an abscess at the root tip in the jawbone. A root canal treatment essentially involves:</p>
      <ol>
        <li>Numbing the tooth completely (so you feel nothing).</li>
        <li>Making a small opening in the top of the tooth.</li>
        <li>Removing the infected or dead pulp tissue.</li>
        <li>Cleaning and disinfecting the canals inside the roots.</li>
        <li>Filling and sealing the space to prevent bacteria from returning.</li>
      </ol>

      <h3>Myth: Root Canals are Painful</h3>
      <p>This is perhaps the biggest myth in dentistry. Decades ago, before modern anaesthetics, root canals may have been uncomfortable. Today, the procedure is practically painless. In fact, <strong>a root canal relieves pain; it doesn't cause it.</strong> The pain you feel is coming from the infection <em>before</em> the treatment. Once the dentist removes the infected nerve, the pain stops almost instantly.</p>

      <h3>The Option of Extraction</h3>
      <p>Extraction means removing the tooth entirely. While this does solve the immediate problem of infection, it creates a host of new, long-term issues:</p>
      
      <ul>
        <li><strong>Bone Loss:</strong> The jawbone needs the stimulation of chewing on a tooth to maintain its density. When a tooth is removed, the bone in that area begins to melt away (resorb) over time.</li>
        <li><strong>Shifting Teeth:</strong> The teeth next to the gap will start to drift and tilt into the empty space. The opposing tooth above or below may also over-erupt (grow downwards/upwards) because it has nothing to bite against. This messes up your bite alignment.</li>
        <li><strong>Chewing Difficulty:</strong> Losing a molar significantly reduces your chewing efficiency, potentially affecting digestion and diet.</li>
        <li><strong>Aesthetics:</strong> Missing teeth can cause the face to look sunken and aged.</li>
      </ul>

      <h3>The Cost Comparison: Short Term vs Long Term</h3>
      <p>Patients often choose extraction because it is cheaper upfront. An extraction might cost £150-£300, whereas a root canal and crown might cost £700-£1200.</p>
      <p>However, this is a false economy. Once the tooth is gone, replacing it is expensive. To restore function, you will need:</p>
      <ul>
        <li><strong>A Dental Implant:</strong> Costing £2,500 - £3,000.</li>
        <li><strong>A Dental Bridge:</strong> Costing £1,500 - £2,500 and requiring cutting down healthy adjacent teeth.</li>
        <li><strong>A Denture:</strong> Which can be uncomfortable and loose.</li>
      </ul>
      <p>Therefore, spending money to <strong>save</strong> the tooth now via root canal is almost always cheaper than replacing the tooth later.</p>

      <h3>When is Extraction the Better Choice?</h3>
      <p>There are valid reasons to extract a tooth:</p>
      <ul>
        <li><strong>Vertical Root Fracture:</strong> If the tooth is cracked below the gum line, it cannot be sealed and must be removed.</li>
        <li><strong>Severe Bone Loss:</strong> If gum disease has destroyed too much bone support, the tooth may be too loose to save.</li>
        <li><strong>Wisdom Teeth:</strong> As they are non-functional, we usually extract them rather than treat them.</li>
        <li><strong>Financial Constraints:</strong> If a patient strictly cannot afford restorative work, extraction removes the infection and health risk.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Your natural teeth are superior to any replacement option available today. Nothing feels, functions, or looks quite like the real thing. If you have the option to save a tooth with a root canal, we highly recommend it. It preserves your jawbone, your bite, and your smile.</p>
      <p>If you have a painful tooth, don't decide its fate alone. Book an emergency appointment with us, and we will perform a thorough assessment to present all your options clearly.</p>
    `
  },
  {
    id: '4',
    title: "How to Manage Toothache at Home at 3 AM",
    excerpt: "Woke up in agony? Here are safe home remedies to manage pain until you can see us in the morning.",
    category: "Pain Relief",
    date: "Oct 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512551573215-645391d8f1dc?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">It is a familiar and dreaded scenario: You go to bed feeling fine, or perhaps with a slight niggle in your tooth. Then, at 3 AM, you wake up in excruciating, throbbing agony. Dental pain is notorious for striking at night, often because lying down increases blood pressure to the head, increasing pressure in the sensitive, inflamed tooth pulp.</p>

      <p>While home remedies can never cure a dental infection—only a dentist can do that—they can help manage the pain enough to let you get a few hours of sleep until our clinic opens. Here is a dentist-approved guide to surviving the night.</p>

      <h3>1. Anti-Inflammatory Medication</h3>
      <p>Most dental pain is caused by inflammation. Therefore, anti-inflammatory drugs (NSAIDs) like <strong>Ibuprofen</strong> are generally more effective for toothache than Paracetamol alone.</p>
      <p><em>Guidance:</em> If you are medically able to take them (no asthma, stomach ulcers, or allergies), taking Ibuprofen at regular intervals can reduce the inflammation in the nerve. Some patients find relief taking Paracetamol and Ibuprofen in combination (staggered), but always follow the dosage instructions on the packet strictly. Never exceed the recommended dose.</p>

      <h3>2. Keep Your Head Elevated</h3>
      <p>As mentioned, lying flat causes blood to rush to your head, increasing the throbbing sensation. Try to sleep propped up on two or three pillows, or even sleep in a recliner chair if possible. Keeping your head above your heart can significantly reduce the throbbing pressure.</p>

      <h3>3. Salt Water Rinses</h3>
      <p>Salt water is a natural disinfectant and can help reduce swelling and clean out debris around the painful tooth.</p>
      <ul>
        <li>Mix a teaspoon of salt into a cup of warm (not boiling) water.</li>
        <li>Swish it around your mouth for 30 seconds, focusing on the painful area.</li>
        <li>Spit it out. Repeat 3-4 times.</li>
      </ul>

      <h3>4. Clove Oil</h3>
      <p>Clove oil contains eugenol, which is a natural anaesthetic and antiseptic. It has been used in dentistry for centuries.</p>
      <p><strong>How to use:</strong> Apply a tiny amount of clove oil to a cotton ball and gently dab it onto the painful tooth or gum. Be careful not to swallow it or use too much, as it can irritate the tongue.</p>

      <h3>5. Cold Compress</h3>
      <p>If your face is swollen, apply a cold compress or a bag of frozen peas wrapped in a towel to the <strong>outside</strong> of your cheek. Hold it there for 10-15 minutes, then take a break. The cold constricts blood vessels, numbs the area, and helps reduce swelling.</p>
      <p><strong>Warning:</strong> Do not apply heat (like a hot water bottle) to a swollen face. Heat draws more blood to the area and can make the infection spread faster.</p>

      <h3>What NOT to Do</h3>
      <ul>
        <li><strong>Do NOT put Aspirin on the gum:</strong> There is an old myth that placing an aspirin tablet directly on the gum next to the tooth helps. This causes a severe chemical burn called an "aspirin burn," leaving a painful white ulcer on your gum. Swallow the pill; don't park it.</li>
        <li><strong>Do NOT ignore it if the pain stops:</strong> Sometimes, the nerve inside the tooth dies, and the pain suddenly vanishes. This does not mean you are healed; it means the infection is now moving silently into the bone. An abscess will follow. You still need treatment.</li>
      </ul>

      <h3>Book Your Appointment Immediately</h3>
      <p>These tips are stop-gap measures. You need to see a dentist as soon as the sun comes up. At Emergency Dentist London, we reserve slots every morning specifically for patients who have had a rough night.</p>
      <p>Use our online booking system (available 24/7) to secure the first slot of the day, or call us at 08:00 AM.</p>
    `
  },
  {
    id: '5',
    title: "What is a Dry Socket and How to Prevent It",
    excerpt: "Dry socket is a painful complication after extraction. Learn how to avoid it for a smooth recovery.",
    category: "Aftercare",
    date: "Oct 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">You've just had a troublesome tooth extracted. You expect the pain to fade away, but three days later, a new, intense pain radiates through your jaw. You may be suffering from <strong>Dry Socket</strong> (Alveolar Osteitis).</p>
      
      <p>Dry socket is the most common complication following a tooth extraction, occurring in about 2-5% of cases (higher for wisdom teeth). It is notoriously painful, but fully preventable if you follow the right advice.</p>

      <h3>What is a Dry Socket?</h3>
      <p>After a tooth is pulled, a blood clot forms in the empty socket. This clot is vital. It acts like a biological bandage, stopping bleeding and protecting the exposed jawbone and nerve endings underneath. It also serves as the foundation for new bone growth.</p>
      <p>A dry socket occurs when this blood clot either fails to form, dislodges, or dissolves too early. This leaves the bone and nerves exposed to air, food, and fluids. The pain is usually worse than the original toothache.</p>

      <h3>Symptoms of Dry Socket</h3>
      <ul>
        <li><strong>Delayed Pain:</strong> Severe pain that starts 2-4 days after the extraction.</li>
        <li><strong>Empty Socket:</strong> Looking in the mirror, you don't see a dark red clot, but a whitish/grey hole (bone).</li>
        <li><strong>Bad Breath/Taste:</strong> A foul odor or nasty taste in the mouth.</li>
        <li><strong>Radiating Pain:</strong> Pain that shoots up to the ear, eye, or temple on the same side.</li>
      </ul>

      <h3>Top Tips to Prevent Dry Socket</h3>
      <p>The first 24-48 hours are critical for the stability of the blood clot. To protect it:</p>

      <h4>1. No Suction</h4>
      <p>Suction creates a vacuum in the mouth that can rip the clot out of the socket.
      <br/>- <strong>No Straws:</strong> Do not drink through a straw for at least a week.
      <br/>- <strong>No Spitting:</strong> Don't spit vigorously. If you need to empty your mouth, let the fluid drool out over a sink.
      <br/>- <strong>No Smoking:</strong> This is the #1 cause. The sucking motion + the chemicals in smoke drastically increase risk.</p>

      <h4>2. Leave the Site Alone</h4>
      <p>Don't poke the gap with your tongue, finger, or toothpick. Don't brush the extraction site directly for the first 2 days (brush other teeth normally).</p>

      <h4>3. Gentle Rinsing Only</h4>
      <p>Do not rinse your mouth at all for the first 24 hours. After that, use warm salt water, but rinse <em>very gently</em>. Just tilt your head side to side; don't swish aggressively.</p>

      <h4>4. Avoid Certain Foods</h4>
      <p>Avoid hot drinks (which can dissolve the clot) and stick to cold or lukewarm fluids. Avoid crunchy, crumbly foods (like popcorn, nuts, or seeds) that can get stuck in the socket.</p>

      <h3>Treatment: What We Do</h3>
      <p>If you suspect you have a dry socket, painkillers alone won't touch the pain. You need to come back to see us.</p>
      <p>The treatment is simple and provides almost instant relief. We will:</p>
      <ol>
        <li>Gently flush the socket to remove debris.</li>
        <li>Pack the socket with a medicated dressing (often containing clove oil/eugenol).</li>
        <li>This dressing soothes the bone and covers the nerves immediately.</li>
      </ol>
      <p>You may need to come back every 2 days to have the dressing changed until natural healing takes over. If you are in post-extraction agony, call us immediately.</p>
    `
  },
  {
    id: '6',
    title: "Chipped a Front Tooth? Here are Your Options",
    excerpt: "A chipped front tooth affects your smile and confidence. We explain bonding vs veneers.",
    category: "Cosmetic",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">Chipping a front tooth is a traumatic experience. Whether it happened from a fall, a sports injury, or simply biting on a fork, the impact on your smile can be devastating. However, modern cosmetic dentistry offers fantastic solutions that can make your tooth look as good as new—often in a single visit.</p>

      <p>The right treatment depends on the severity of the chip. Is it just a tiny corner? Or has half the tooth snapped off? Here is a guide to your options.</p>

      <h3>1. Cosmetic Contouring (Smoothing)</h3>
      <p><strong>Best for:</strong> Tiny, jagged chips.</p>
      <p>If the chip is very small and doesn't affect the aesthetics significantly, we might simply smooth out the rough edge and polish the tooth. This is painless, requires no anaesthetic, and costs very little. It leaves the tooth looking natural, just slightly shorter or more rounded.</p>

      <h3>2. Composite Bonding</h3>
      <p><strong>Best for:</strong> Small to medium chips.</p>
      <p>This is the most popular emergency fix. Composite bonding involves applying a tooth-coloured resin material directly to your tooth. The dentist acts like a sculptor:</p>
      <ul>
        <li>They select a shade of resin that perfectly matches your natural enamel.</li>
        <li>They apply the resin putty to the missing area.</li>
        <li>They shape it to recreate the natural anatomy of the tooth.</li>
        <li>A special UV light is used to harden the material instantly.</li>
      </ul>
      <p><strong>Pros:</strong> Done in one visit (30-60 mins), relatively affordable (£197+), requires no drilling of the natural tooth.</p>
      <p><strong>Cons:</strong> Can stain over time (coffee/wine) and may chip again if you bite hard things.</p>

      <h3>3. Porcelain Veneers</h3>
      <p><strong>Best for:</strong> Larger breaks or for a longer-lasting aesthetic result.</p>
      <p>A veneer is a thin, custom-made shell of porcelain that covers the entire front surface of the tooth. It is like a false fingernail for your tooth.</p>
      <p><strong>Pros:</strong> Extremely durable, stain-resistant, and looks incredibly realistic (mimics light reflection like real enamel).</p>
      <p><strong>Cons:</strong> More expensive (£550+), takes two visits (one to prepare/impress, one to fit), and involves removing a thin layer of enamel.</p>

      <h3>4. Dental Crowns</h3>
      <p><strong>Best for:</strong> Severe fractures involving more than 50% of the tooth.</p>
      <p>If a large chunk of the tooth is gone, there may not be enough structure left to hold a veneer or bonding. A crown (cap) covers the entire tooth, holding it together and protecting it from further breakage.</p>

      <h3>Emergency Action Plan</h3>
      <p>If you chip a tooth:</p>
      <ol>
        <li><strong>Find the fragment:</strong> If you have the piece of tooth, put it in milk or water. Sometimes we can bond the real piece back on!</li>
        <li><strong>Cover sharp edges:</strong> If the tooth is cutting your tongue, cover it with sugar-free gum or dental wax.</li>
        <li><strong>Check for nerve exposure:</strong> Look at the break. If you see a red dot in the middle, the nerve is exposed. This is urgent—you need to see us immediately to prevent infection and likely need a root canal.</li>
      </ol>
      <p>Don't let a chipped tooth ruin your smile. Book a cosmetic emergency appointment today.</p>
    `
  },
  {
    id: '7',
    title: "The Dangers of Ignoring a Dental Abscess",
    excerpt: "An abscess is not just a toothache—it's a serious infection. Why you must treat it immediately.",
    category: "Emergencies",
    date: "Oct 08, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">A dental abscess is one of the most serious conditions we treat. It is not just "a bad toothache"—it is a bacterial infection that has established a stronghold in your jaw. While many people try to ignore the pain hoping it will go away, ignoring an abscess can lead to life-threatening complications.</p>

      <h3>What is a Dental Abscess?</h3>
      <p>An abscess is a pocket of pus that forms when bacteria invade the dental pulp (nerve) or the deep gum pockets. The body sends white blood cells to fight the bacteria, resulting in a buildup of pus, pressure, and inflammation.</p>
      <p>There are two main types:</p>
      <ul>
        <li><strong>Periapical Abscess:</strong> Occurs at the tip of the tooth root (caused by decay/dying nerve).</li>
        <li><strong>Periodontal Abscess:</strong> Occurs in the gums next to a tooth root (caused by gum disease).</li>
      </ul>

      <h3>Why is it Dangerous?</h3>
      <p>The mouth is very close to vital structures: the brain, the airway, and the sinuses. Unlike a cut on your finger, an infection inside a tooth has nowhere to drain. The pressure builds up, and the bacteria seek a way out.</p>

      <h4>1. Spread to the Jaw and Neck</h4>
      <p>The infection can eat through the jawbone and spread into the soft tissues of the floor of the mouth and neck. This causes massive swelling.</p>

      <h4>2. Ludwig's Angina</h4>
      <p>This is a rare but critical condition where the infection causes swelling under the tongue and in the neck so severe that it blocks the airway, causing suffocation. This is a medical emergency requiring hospitalization.</p>

      <h4>3. Sepsis</h4>
      <p>Bacteria from the abscess can enter the bloodstream, leading to sepsis (blood poisoning), which is a systemic reaction that can be fatal if not treated aggressively.</p>

      <h3>Warning Signs</h3>
      <p>You need emergency care if you have:</p>
      <ul>
        <li>Severe, throbbing pain.</li>
        <li>Sensitivity to hot/cold.</li>
        <li>Pain when biting.</li>
        <li>Fever or feeling generally unwell.</li>
        <li>Swollen lymph nodes in the neck.</li>
        <li>A pimple on the gum that leaks bad-tasting fluid.</li>
      </ul>

      <h3>Treatment Options</h3>
      <p>Antibiotics alone <strong>do not cure</strong> an abscess. They might temporarily reduce swelling, but the physical pocket of infection remains inside the tooth. To cure it, we must physically remove the bacteria:</p>
      <ol>
        <li><strong>Drainage:</strong> We may make a small incision in the gum to let the pus out, providing instant relief from pressure.</li>
        <li><strong>Root Canal:</strong> We clean out the infected nerve, disinfecting the inside of the tooth and saving it.</li>
        <li><strong>Extraction:</strong> If the tooth is too damaged, we remove it to allow the infection to drain and heal.</li>
      </ol>
      <p>If you suspect an abscess, do not wait. Every hour counts. Call Emergency Dentist London immediately.</p>
    `
  },
  {
    id: '8',
    title: "Emergency Dentist Costs in London Explained",
    excerpt: "Worried about the bill? We break down the costs of emergency care and why private is worth it.",
    category: "General Info",
    date: "Oct 05, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">One of the biggest sources of anxiety for patients isn't the dental drill—it's the bill. At Emergency Dentist London, we believe that unclear pricing adds unnecessary stress to an already painful situation. That’s why we are committed to complete transparency.</p>

      <p>In this article, we explain exactly what you are paying for, the difference between NHS and Private emergency care, and how our pricing structure works.</p>

      <h3>NHS vs Private Emergency Care</h3>
      <p><strong>NHS Dentistry:</strong> NHS charges are subsidized by the government. Band 1 urgent treatment is roughly £26.80. However, finding an NHS dentist with emergency slots available in London can be incredibly difficult. You may wait days or weeks, or sit in a queue at a dental hospital for hours.</p>
      <p><strong>Private Dentistry:</strong> Private care is self-funded. You are paying for:</p>
      <ul>
        <li><strong>Immediate Access:</strong> We prioritize same-day appointments, often within hours of your call.</li>
        <li><strong>Time:</strong> We allocate longer appointment slots (30-60 mins) to ensure we can diagnose <em>and</em> treat you, rather than just giving a temporary fix.</li>
        <li><strong>Materials & Tech:</strong> We use high-quality aesthetic materials (white fillings, not silver) and digital X-rays.</li>
      </ul>

      <h3>Our Pricing Structure</h3>
      <p>We have designed our fees to be accessible.</p>

      <h4>1. The Emergency Assessment: £30</h4>
      <p>This is our special offer for new patients. Many Central London clinics charge £80-£150 just to walk in the door. We charge £30. This covers:</p>
      <ul>
        <li>The dentist's time.</li>
        <li>A full examination of the problem.</li>
        <li>A diagnosis and discussion of treatment options.</li>
      </ul>
      <p><em>Note: X-rays are charged separately (£10) as not every patient needs them.</em></p>

      <h4>2. Treatment Fees</h4>
      <p>Treatment costs depend on what is required to get you out of pain. We will <strong>always</strong> give you a quote before we start.</p>
      <ul>
        <li><strong>Simple Prescription/Advice:</strong> Included in exam or minimal charge.</li>
        <li><strong>Simple Extraction:</strong> From £125. If the tooth is loose or easy to remove.</li>
        <li><strong>Surgical Extraction:</strong> From £325. If the tooth breaks or needs bone removal.</li>
        <li><strong>Root Canal (Stage 1):</strong> From £247.50. Removing the nerve to stop pain.</li>
        <li><strong>White Filling:</strong> From £92.50.</li>
      </ul>

      <h3>Our Membership Plan</h3>
      <p>For patients without insurance, we offer an in-house Membership Plan. For just £20/month, you get:</p>
      <ul>
        <li><strong>50% OFF</strong> almost all treatments (as listed above).</li>
        <li>Routine check-ups and hygiene included.</li>
        <li>Priority booking.</li>
      </ul>
      <p>This plan often pays for itself in a single emergency visit. Ask our reception team about signing up when you arrive.</p>

      <p>Don't let cost prevent you from saving your tooth. We offer finance options for larger treatments and accept all major credit cards.</p>
    `
  },
  {
    id: '9',
    title: "Lost a Filling? Don't Use Superglue!",
    excerpt: "It might be tempting to fix a lost filling at home, but here is why you shouldn't.",
    category: "General Info",
    date: "Oct 01, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1609840114035-1c29046a8af3?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">It usually happens while eating something sticky like a toffee or caramel. You feel a sudden crunch, and then a distinct hole in your tooth where a filling used to be. Panic sets in. You might be tempted to head to the kitchen drawer for a tube of Superglue to fix it back in. <strong>Stop right there.</strong></p>

      <p>As dentists, we have seen it all. And we can tell you from experience: DIY dentistry almost always leads to disaster. Here is why you should never glue a filling, and what you should do instead.</p>

      <h3>Why Superglue is Toxic</h3>
      <p>Household glues (cyanoacrylates) are not biocompatible. They contain toxins that are harmful if swallowed or absorbed into the gums. More importantly, they are toxic to the tooth pulp (nerve).</p>
      <p>If you glue a filling back in, the chemicals will likely kill the nerve of the tooth. This turns a simple £90 re-filling job into a £500 root canal treatment. Furthermore, the glue creates a seal that traps bacteria underneath the filling, leading to massive decay that you can't clean.</p>

      <h3>The Risks of an Open Hole</h3>
      <p>When a filling falls out, the sensitive dentine underneath is exposed. You may feel:</p>
      <ul>
        <li>Sharp pain when breathing cold air.</li>
        <li>Pain when drinking hot/cold fluids.</li>
        <li>Food packing into the gap, causing gum inflammation.</li>
        <li>Sharp edges cutting your tongue.</li>
      </ul>

      <h3>Safe Home Measures</h3>
      <p>If you can't get to us immediately (e.g., it's Sunday night), here is how to manage:</p>
      <ol>
        <li><strong>Keep it clean:</strong> Brush gently and rinse with warm salt water to keep food out of the hole.</li>
        <li><strong>Temporary Filling Material:</strong> Most pharmacies sell temporary dental cement (like "Toofypegs" or "Dentemp"). This is a safe, putty-like material you can press into the hole to seal it for 48 hours.</li>
        <li><strong>Sugar-Free Gum:</strong> In a pinch, a piece of sugar-free chewing gum can be placed over the hole to protect the tongue and stop food packing. Do NOT use sugary gum, as it will cause instant pain in the exposed nerve.</li>
      </ol>

      <h3>Professional Repair</h3>
      <p>When you come to see us, we will:</p>
      <ul>
        <li>Remove any temporary material you placed.</li>
        <li>Clean out any fresh decay that caused the filling to fail.</li>
        <li>Place a new, durable composite (white) filling.</li>
      </ul>
      <p>A lost filling is a fixable problem, but time is of the essence. The longer the inner tooth is exposed, the higher the risk of nerve damage. Book a slot today.</p>
    `
  },
  {
    id: '10',
    title: "Antibiotics for Tooth Infection: Do You Need Them?",
    excerpt: "Why antibiotics aren't always the answer for toothache and when they are actually necessary.",
    category: "Treatments",
    date: "Sep 28, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">"Can you just give me antibiotics?" is one of the most common questions we hear from patients in pain. There is a widespread misconception that antibiotics cure toothaches. The reality is more complex. While antibiotics are powerful drugs, they are rarely the solution for dental pain and are prescribed strictly according to guidelines.</p>

      <h3>How Dental Infections Work</h3>
      <p>A tooth infection typically exists <em>inside</em> the tooth (in the nerve canal). Once the nerve dies, there is no blood supply entering the tooth. Antibiotics travel through your bloodstream. Therefore, antibiotics <strong>cannot reach</strong> the bacteria inside the dead tooth.</p>
      <p>Taking antibiotics might temporarily reduce the swelling in the surrounding gum tissue, but the source of the infection remains untouched. As soon as you stop the course, the infection (and pain) will return, often worse than before.</p>

      <h3>The Only Cure: Physical Intervention</h3>
      <p>To cure a tooth infection, we must physically remove the bacteria. This is done via:</p>
      <ul>
        <li><strong>Root Canal Treatment:</strong> Cleaning out the inside of the tooth.</li>
        <li><strong>Extraction:</strong> Removing the tooth entirely.</li>
        <li><strong>Drainage:</strong> Lancing an abscess to let pus out.</li>
      </ul>
      <p>Once the pressure is relieved and the bacteria are removed, the body heals very quickly without the need for drugs.</p>

      <h3>When Do We Prescribe Antibiotics?</h3>
      <p>We do prescribe them, but only when the infection is spreading systematically. Signs include:</p>
      <ul>
        <li><strong>Facial Swelling:</strong> Visible swelling of the cheek or jaw.</li>
        <li><strong>Lymph Node Involvement:</strong> Tender lumps under the jaw.</li>
        <li><strong>Fever:</strong> Body temperature over 38°C.</li>
        <li><strong>Trismus:</strong> Inability to open the mouth.</li>
        <li><strong>Compromised Immunity:</strong> If the patient has a weakened immune system (e.g., diabetes, chemotherapy).</li>
      </ul>

      <h3>Antibiotic Resistance</h3>
      <p>Over-prescribing antibiotics leads to antibiotic resistance, a global health crisis where bacteria evolve to survive drugs. Dentists have a duty to prescribe responsibly. If we refuse to give you antibiotics for a simple toothache, it is because they won't help you, and avoiding them protects your future health.</p>

      <p>If you are in pain, you need a dentist's hand, not a prescription pad. Book an appointment for definitive treatment today.</p>
    `
  },
  {
    id: '11',
    title: "Broken Dentures: Repair or Replace? A Guide",
    excerpt: "Snapped your denture? We can often fix it same-day in our lab.",
    category: "Treatments",
    date: "Sep 25, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">For those who rely on dentures, a breakage is a major emergency. It affects your ability to eat, speak, and smile confidently. Dentures can break for many reasons: dropping them in the sink, wear and tear over years, or changes in the shape of your jawbone causing a poor fit.</p>

      <p>The good news is that most denture breaks can be repaired. The bad news is that trying to fix them yourself can ruin them forever.</p>

      <h3>Types of Denture Damage</h3>
      <ul>
        <li><strong>Midline Fracture:</strong> The denture snaps cleanly in half down the middle. This is common in upper dentures that flex too much due to bone loss.</li>
        <li><strong>Broken Tooth:</strong> A single artificial tooth chips or falls off the pink base.</li>
        <li><strong>Broken Clasp:</strong> On partial dentures, the metal clip that holds it to your natural teeth snaps.</li>
      </ul>

      <h3>Repair vs. Replace</h3>
      <p><strong>Repairable:</strong> Clean fractures where the pieces fit back together perfectly like a puzzle are usually repairable. We use cold-cure acrylic resin to chemically bond the pieces back together, often stronger than before. This can typically be done same-day or within 24 hours.</p>
      <p><strong>Replacement Needed:</strong> If the denture has shattered into many small pieces, if the pink acrylic is old and brittle/discoloured, or if the breakage happened because the denture no longer fits your gums, a repair will just break again. In these cases, a new denture is the best investment.</p>

      <h3>The "Superglue" Warning</h3>
      <p>We cannot stress this enough: <strong>DO NOT GLUE YOUR DENTURE.</strong></p>
      <p>Superglue dissolves the acrylic material of the denture, distorting the edges. Once you glue it, the pieces will never fit together perfectly again. This often makes a professional repair impossible, forcing you to buy a brand new set. Furthermore, superglue chemicals are toxic and taste terrible.</p>

      <h3>What to Do</h3>
      <p>If your denture breaks:</p>
      <ol>
        <li>Collect all the pieces.</li>
        <li>Don't wear it (wearing a broken denture can cut your mouth).</li>
        <li>Call us immediately.</li>
      </ol>
      <p>We work with skilled dental technicians in London who prioritize emergency repairs. We can often get your smile back to you within hours.</p>
    `
  },
  {
    id: '12',
    title: "Pediatric Dental Emergencies: Advice for Parents",
    excerpt: "What to do if your child knocks out a tooth or has a severe toothache.",
    category: "Emergencies",
    date: "Sep 22, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">Seeing your child in pain or with a dental injury is distressing for any parent. Children are active and prone to bumps and falls, making dental trauma common. Knowing how to react calmly and quickly can make the difference between saving and losing a tooth.</p>

      <h3>Knocked-Out Tooth (Avulsion)</h3>
      <p>The rules differ depending on whether it is a baby tooth or an adult tooth.</p>
      
      <p><strong>Baby Tooth:</strong> NEVER put a knocked-out baby tooth back in. Doing so can damage the adult tooth developing underneath in the gum. Control the bleeding with a clean gauze and bring the child to see us to check for other injuries.</p>
      
      <p><strong>Adult Tooth:</strong> This is an emergency. You must act fast (within 60 mins).
      <br/>1. Find the tooth. Hold it by the crown (white top), not the root.
      <br/>2. If dirty, lick it clean or rinse briefly with milk (don't scrub).
      <br/>3. Push it back into the socket immediately. Have the child bite on a handkerchief to hold it.
      <br/>4. If you can't re-plant it, store it in milk or the child's saliva (have them spit in a cup).
      <br/>5. Come straight to us.</p>

      <h3>Broken/Chipped Tooth</h3>
      <p>If a large piece of tooth breaks off, try to find it. Keep it in water/milk. We can often bond it back on. If the tooth looks red or bleeding in the center, the nerve is exposed. This is painful and needs urgent treatment to seal the nerve.</p>

      <h3>Toothache</h3>
      <p>Toothache in children is usually caused by food trapped between teeth or decay.
      <br/>- Floss gently on either side of the tooth.
      <br/>- Rinse with warm salt water.
      <br/>- Give child-appropriate painkillers (Calpol/Nurofen).
      <br/>- Do NOT put heat on the cheek or aspirin on the gum.
      <br/>- Book an appointment. Infections in children can spread very fast.</p>

      <h3>Managing Anxiety</h3>
      <p>Your child will pick up on your panic. Try to remain calm and positive. Tell them the dentist is a "tooth helper" who will stop the hurt. Avoid words like "needle," "pull," or "pain." Our team is trained in pediatric care and will use child-friendly language to put them at ease.</p>
    `
  },
  {
    id: '13',
    title: "Overcoming Dental Anxiety in Emergencies",
    excerpt: "Scared of the dentist? We specialize in treating nervous patients with care and compassion.",
    category: "General Info",
    date: "Sep 20, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">If the thought of sitting in a dental chair makes your heart race and palms sweat, you are not alone. Dental phobia is very common. However, when a dental emergency strikes, fear can prevent patients from seeking the help they desperately need, leading to prolonged suffering and worsening infection.</p>

      <p>At Emergency Dentist London, we pride ourselves on being a safe haven for nervous patients. We don't just treat teeth; we treat people. Here is how we help you manage anxiety.</p>

      <h3>1. A Non-Judgmental Environment</h3>
      <p>Many patients fear being scolded for the state of their teeth or for not visiting a dentist in years. We guarantee zero judgment. We understand that life gets in the way, or that fear has kept you away. We are simply glad you are here now so we can help.</p>

      <h3>2. You Are in Control</h3>
      <p>Fear often comes from a loss of control. We give that control back to you.
      <br/>- <strong>The Stop Signal:</strong> Before we start, we agree on a signal (usually raising your left hand). If you do this, we stop immediately. No questions asked.
      <br/>- <strong>Tell-Show-Do:</strong> We explain what we are going to do, show you the instrument, and only then do it. No surprises.</p>

      <h3>3. Painless Injections</h3>
      <p>Fear of the needle is a major trigger. We use a topical numbing gel (strawberry flavored!) on the gum before the injection, so you barely feel the scratch. We also inject slowly, which reduces pressure and discomfort.</p>

      <h3>4. Taking Breaks</h3>
      <p>Emergency appointments are longer than routine ones. This allows us to take breaks if you feel overwhelmed. You can sit up, have a drink of water, and breathe.</p>

      <h3>5. Chemical Help</h3>
      <p>If you are extremely anxious, let us know when booking. While we don't offer full sedation for emergencies, we can offer advice on taking oral anti-anxiety medication (like diazepam) prescribed by your GP before you arrive (you will need an escort).</p>

      <p>Don't let fear dictate your health. Millions of patients overcome dental anxiety every year. Let us help you be one of them.</p>
    `
  },
  {
    id: '14',
    title: "Why Do My Gums Bleed? Gingivitis Explained",
    excerpt: "Bleeding gums are the first sign of gum disease. Learn how to stop it before it gets worse.",
    category: "General Info",
    date: "Sep 18, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">When you brush your teeth and spit into the sink, do you see pink? Many people think bleeding gums are "normal" if they brush too hard. This is a dangerous myth. Healthy gums do not bleed, even with vigorous brushing. Bleeding is a sign of active inflammation and disease.</p>

      <h3>Gingivitis: The Early Stage</h3>
      <p>The primary cause of bleeding is <strong>plaque</strong>—a sticky film of bacteria that forms on teeth. If not removed by brushing and flossing, plaque irritates the gums, causing them to become red, swollen, and prone to bleeding. This is called Gingivitis.</p>
      <p>The good news: Gingivitis is 100% reversible. If you improve your hygiene and get a professional cleaning, your gums can return to perfect health.</p>

      <h3>Periodontitis: The Silent Killer</h3>
      <p>If gingivitis is ignored, it progresses to <strong>Periodontitis</strong>. The plaque hardens into tartar (calculus), which pushes down below the gum line. The bacteria then begin to attack the jawbone and ligaments that hold your teeth in place.</p>
      <p>Symptoms include:</p>
      <ul>
        <li>Bad breath that won't go away.</li>
        <li>Receding gums (teeth look longer).</li>
        <li>Loose teeth.</li>
        <li>Pus between teeth and gums.</li>
      </ul>
      <p>Once bone is lost, it never grows back. Periodontitis is the leading cause of tooth loss in adults.</p>

      <h3>What To Do If Your Gums Bleed</h3>
      <p><strong>1. Don't Stop Brushing:</strong> It is tempting to avoid brushing the bleeding areas because it looks scary or hurts. This is the worst thing you can do. You need to brush <em>more</em> (gently) to remove the bacteria causing the problem.</p>
      <p><strong>2. Start Flossing:</strong> Brushing misses 40% of tooth surfaces. You must clean between teeth daily.</p>
      <p><strong>3. See a Hygienist:</strong> You cannot remove tartar at home. It requires professional scaling. We offer emergency hygiene appointments for acute gum infections (ANUG) which are painful and cause profuse bleeding.</p>
      
      <p>Healthy gums are the foundation of a healthy smile. If you are seeing red, book a check-up today.</p>
    `
  },
  {
    id: '15',
    title: "Sensitive Teeth: Causes and Cures",
    excerpt: "Does ice cream hurt? You might have exposed dentine or enamel erosion.",
    category: "Pain Relief",
    date: "Sep 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512551573215-645391d8f1dc?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">Does a sip of hot coffee or a bite of ice cream send a sharp, shooting jolt of pain through your tooth? Tooth sensitivity (Dentine Hypersensitivity) is a common dental complaint, but it can make eating and drinking a misery.</p>

      <h3>The Anatomy of Sensitivity</h3>
      <p>Teeth are protected by a hard outer layer called enamel (above the gum) and cementum (below the gum). Underneath lies the <strong>dentine</strong>, which contains thousands of microscopic tubes leading directly to the tooth nerve. When the protective enamel wears away or gums recede, these tubes are exposed. Hot, cold, or sweet triggers travel down the tubes and zap the nerve.</p>

      <h3>Common Causes</h3>
      <ul>
        <li><strong>Brushing Too Hard:</strong> Aggressive scrubbing wears away enamel and pushes gums back (recession).</li>
        <li><strong>Acid Erosion:</strong> Frequent consumption of fizzy drinks, citrus fruits, or conditions like acid reflux dissolve enamel.</li>
        <li><strong>Grinding (Bruxism):</strong> Grinding teeth at night causes micro-cracks in enamel.</li>
        <li><strong>Whitening:</strong> Bleaching treatments can cause temporary sensitivity.</li>
        <li><strong>Gum Disease:</strong> Exposed roots due to recession are very sensitive.</li>
      </ul>

      <h3>How to Fix It</h3>
      <p><strong>1. Desensitizing Toothpaste:</strong> Brands like Sensodyne or Colgate Pro-Relief contain compounds (like potassium nitrate) that block the nerve signals or plug the dentine tubes. You must use them every day for them to work.</p>
      <p><strong>2. Change Your Brush:</strong> Switch to a soft-bristled toothbrush and use a gentle circular motion.</p>
      <p><strong>3. Fluoride Varnish:</strong> Visit us for a fluoride application. This high-concentration varnish strengthens enamel and reduces sensitivity.</p>
      <p><strong>4. Bonding:</strong> If you have severe wear or recession, we can apply composite bonding (filling material) to cover the exposed sensitive root surfaces.</p>
      
      <p>Note: Sensitivity can sometimes be a sign of a dying nerve or a cavity. If the pain lingers for minutes after the cold stimulus is removed, it is likely not just sensitivity but pulpitis. See a dentist to be sure.</p>
    `
  },
  {
    id: '16',
    title: "Emergency Dentist Open Weekends in London",
    excerpt: "Dental pain doesn't take a break on Saturday. We are open weekends for your convenience.",
    category: "General Info",
    date: "Sep 12, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">There is never a "good" time to have a dental emergency, but Saturday night or Sunday morning must be the worst. Most general dental practices are closed from Friday afternoon until Monday morning. This leaves patients in London with few options: suffer in silence, queue for hours at A&E (where they often lack dental equipment), or call NHS 111 and hope for a callback.</p>

      <p>At Emergency Dentist London, we believe healthcare should be available when you need it. That is why we offer dedicated <strong>Weekend Emergency Dental Care</strong> in South Kensington.</p>

      <h3>Our Weekend Services</h3>
      <p>We are open Saturdays from 10:00 AM to 4:00 PM and offer Sunday appointments by special arrangement. We provide the full range of services:</p>
      <ul>
        <li>Emergency extractions.</li>
        <li>Root canal treatments.</li>
        <li>Abscess drainage.</li>
        <li>Re-cementing crowns.</li>
        <li>Trauma management.</li>
      </ul>

      <h3>Why Avoid A&E for Toothache?</h3>
      <p>Doctors in A&E are incredible, but they are not dentists. They cannot drill teeth, pull teeth, or perform root canals. They can typically only offer painkillers and antibiotics. While this might help temporarily, it doesn't solve the problem. You will still need to see a dentist on Monday. By visiting a dedicated emergency dental clinic, you get the definitive treatment you need immediately.</p>

      <h3>How to Book</h3>
      <p>Our weekend slots fill up fast. We recommend booking online via our website, which shows live availability 24/7. Alternatively, call our line at 020 3137 6356. If we are busy with a patient, leave a message, and our triage team will call you back within minutes.</p>

      <p>Don't let a toothache ruin your weekend plans. We are here to help you smile again.</p>
    `
  },
  {
    id: '17',
    title: "Jaw Pain and TMJ Disorders: Causes and Relief",
    excerpt: "Waking up with a sore jaw? You might be grinding your teeth at night.",
    category: "Pain Relief",
    date: "Sep 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531852601053-9c17197c3c2e?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">The Temporomandibular Joint (TMJ) is the hinge that connects your jaw to your skull. It is one of the most complex and frequently used joints in the body, allowing you to talk, chew, and yawn. When this joint or the surrounding muscles malfunction, it leads to a group of conditions called TMD (Temporomandibular Disorders).</p>

      <h3>Symptoms of TMD</h3>
      <ul>
        <li>Pain or tenderness in the jaw, ear, or temple area.</li>
        <li>Clicking, popping, or grating sounds when opening the mouth.</li>
        <li>The jaw getting "stuck" or locked in an open or closed position.</li>
        <li>Frequent headaches or migraines, especially in the morning.</li>
        <li>Difficulty chewing.</li>
      </ul>

      <h3>The Main Culprit: Bruxism</h3>
      <p>The most common cause of jaw pain is <strong>Bruxism</strong>—grinding or clenching your teeth. Most people do this subconsciously during sleep, often triggered by stress or anxiety. The force exerted during sleep grinding can be up to 6 times greater than during normal chewing!</p>
      <p>This excessive force strains the jaw muscles, inflames the joint, and wears down tooth enamel (making teeth flat and sensitive).</p>

      <h3>Treatment Options</h3>
      <p><strong>1. Soft Diet:</strong> Give your jaw a holiday. Avoid chewy foods (bagels, steak, gum) for 2 weeks. Eat soft foods like pasta, eggs, and soup.</p>
      <p><strong>2. Warm Compresses:</strong> Apply heat to the side of the face to relax tight muscles.</p>
      <p><strong>3. Ibuprofen:</strong> Reduces inflammation in the joint.</p>
      <p><strong>4. Michigan Splint (Night Guard):</strong> This is the gold standard treatment. We construct a custom-made hard acrylic splint that fits over your teeth while you sleep. It protects your teeth from wear and positions your jaw in a relaxed state, breaking the grinding habit.</p>

      <p>If you have a locked jaw (can't open or close), this is an emergency. We can perform manual manipulation to reduce the dislocation and provide immediate relief.</p>
    `
  },
  {
    id: '18',
    title: "Implants vs Bridges: Replacing Missing Teeth",
    excerpt: "Lost a tooth in an accident? Here are the best ways to fill the gap.",
    category: "Treatments",
    date: "Sep 08, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">Losing a permanent tooth can be emotionally and physically challenging. Whether due to an emergency extraction, trauma, or decay, leaving a gap can lead to bone loss and shifting of remaining teeth. Fortunately, modern dentistry offers two excellent fixed solutions: <strong>Dental Implants</strong> and <strong>Dental Bridges</strong>.</p>

      <p>But which one is right for you? Here is a breakdown of the pros and cons.</p>

      <h3>Dental Implants: The Gold Standard</h3>
      <p>An implant is a small titanium screw that is surgically placed into the jawbone. It acts as a replacement root. Once the bone heals around it (osseointegration), a porcelain crown is attached on top.</p>
      <p><strong>Pros:</strong>
      <br/>- <strong>Conservative:</strong> Does not damage adjacent teeth.
      <br/>- <strong>Bone Health:</strong> Stimulates the jawbone, preventing bone loss.
      <br/>- <strong>Longevity:</strong> Can last a lifetime with proper care.
      <br/>- <strong>Feel:</strong> Feels and functions exactly like a natural tooth.</p>
      <p><strong>Cons:</strong>
      <br/>- <strong>Cost:</strong> Higher upfront cost (£2000+).
      <br/>- <strong>Time:</strong> Requires 3-6 months for healing.</p>

      <h3>Dental Bridges: The Traditional Choice</h3>
      <p>A bridge closes the gap by using the teeth on either side as anchors. The adjacent teeth are filed down, and a prosthetic tooth is suspended between two crowns placed on these anchors.</p>
      <p><strong>Pros:</strong>
      <br/>- <strong>Speed:</strong> Can be completed in 2 weeks.
      <br/>- <strong>No Surgery:</strong> Non-invasive (no bone drilling).</p>
      <p><strong>Cons:</strong>
      <br/>- <strong>Destructive:</strong> Requires cutting down healthy enamel on neighboring teeth.
      <br/>- <strong>Lifespan:</strong> Average lifespan is 10-15 years.
      <br/>- <strong>Hygiene:</strong> Difficult to floss underneath.</p>

      <h3>Which Should You Choose?</h3>
      <p>If your adjacent teeth are healthy and virgin (no fillings), an implant is far superior because it spares those teeth. However, if the adjacent teeth are already heavily filled or crowned, a bridge might be a good way to restore them and fill the gap simultaneously.</p>
      <p>At Emergency Dentist London, we offer consultations to discuss restorative options once your emergency phase is resolved.</p>
    `
  },
  {
    id: '19',
    title: "What to Do If You Swallow a Crown",
    excerpt: "It happens! Here is the medical advice if your crown comes off and you accidentally swallow it.",
    category: "Emergencies",
    date: "Sep 05, 2024",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">It is a surprisingly common scenario: you are eating dinner, you feel a hard lump in your mouth, but before you can retrieve it, you gulp. You realize your dental crown is gone. Panic sets in. Have you harmed yourself? Will you get it back?</p>

      <h3>Step 1: Are You Breathing Okay?</h3>
      <p>The most critical question is: <strong>did you swallow it (stomach) or inhale it (lungs)?</strong></p>
      <p>If you swallowed it, you will likely feel fine. If you inhaled it (aspiration), you will likely be coughing violently, wheezing, or having trouble breathing. <strong>Aspiration is a medical emergency.</strong> Go to A&E immediately for a chest X-ray and bronchoscopy.</p>

      <h3>Step 2: The Waiting Game</h3>
      <p>If you swallowed it into your stomach, the crown will pass through your digestive system naturally. Dental porcelain and gold are non-toxic and inert. It typically takes 2-5 days to pass. While not the most glamorous task, some patients choose to retrieve it from their stool, bleach it, and bring it in to be sterilized and re-cemented (saving the cost of a new one!). However, most prefer to have a new one made.</p>

      <h3>Step 3: Protect the Tooth</h3>
      <p>The tooth underneath the lost crown is now a "stump" that is exposed to the oral environment. It may be sensitive to cold and prone to drifting. You need to see a dentist promptly.</p>
      <p>We will:
      <br/>- Clean the tooth.
      <br/>- Place a temporary crown to protect it and maintain the gum space.
      <br/>- Scan/impress for a new permanent crown.</p>

      <p>Don't panic. Call us to book a restoration appointment, and let nature take its course!</p>
    `
  },
  {
    id: '20',
    title: "The Impact of Smoking on Dental Emergencies",
    excerpt: "Smokers are at higher risk for gum disease and slow healing. Here's why.",
    category: "General Info",
    date: "Sep 01, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1539744279560-17983c27d145?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">We all know smoking is bad for our lungs and heart, but its impact on oral health is just as devastating. As emergency dentists, we see the effects of smoking daily. Smokers are significantly more likely to suffer from dental emergencies, lose teeth, and experience complications after treatment.</p>

      <h3>1. Masked Gum Disease</h3>
      <p>Smoking constricts blood vessels in the gums. This means smokers often don't get the warning sign of "bleeding gums" even when they have severe gum disease. The disease progresses silently, destroying bone until teeth suddenly become loose and fall out. This is a common emergency presentation.</p>

      <h3>2. Dry Socket Risk</h3>
      <p>If you need an extraction, smoking is your worst enemy. The suction from inhaling on a cigarette, combined with the toxins in the smoke, dramatically increases the risk of Dry Socket—a painful condition where the blood clot fails to form. We strictly advise stopping smoking for at least 72 hours after any surgery.</p>

      <h3>3. Implant Failure</h3>
      <p>Dental implants require healthy bone and good blood supply to integrate. Smokers have a much higher failure rate for implants because nicotine reduces blood flow to the bone.</p>

      <h3>4. Oral Cancer</h3>
      <p>Tobacco use is the leading cause of oral cancer. We perform an oral cancer screen at every examination. Early detection saves lives. Look out for non-healing ulcers, white/red patches, or lumps in the mouth.</p>

      <h3>Our Advice</h3>
      <p>We know quitting is hard. We are not here to lecture, but to support. If you are a smoker, it is vital you visit the dentist more frequently (every 3-6 months) to catch problems early before they become emergencies. If you have an extraction, we can provide nicotine replacement advice to help you get through the healing period safely.</p>
    `
  }
];
