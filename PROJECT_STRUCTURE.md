# Wedding Website - Project Structure

## 📁 Project Overview

This is an elegant single-page wedding website with countdown timer, event details, and accommodation information. The website uses a modern glass-morphism design with smooth animations.

## 🗂️ File Structure

```
wedding-website/
├── index.html          # Main HTML file (489 lines)
├── script.js           # JavaScript for Alpine.js (81 lines)
├── img/               # Image assets directory
│   ├── background_v4.jpg  # Main background image
│   ├── chateau.png        # Château icon
│   ├── eglise.png         # Church icon
│   ├── cocktail.png       # Cocktail icon
│   ├── repas.png          # Dinner icon
│   ├── soiree.png         # Party icon
│   ├── transport.png      # Transport map
│   ├── photo_pro.png      # Photographer icon
│   ├── photo_invites.png  # Guest photos icon
│   └── cagnotte.png       # Gift registry icon
└── PROJECT_STRUCTURE.md # This file
```

## 📄 File Descriptions

### `index.html` (489 lines)
The main and only HTML page for the wedding website.

**Key Features:**
- **Responsive Design**: Works on mobile and desktop
- **Glass-morphism UI**: Elegant frosted glass effect with backdrop blur
- **Seven-tab Interface**: 
  1. **Accueil** (Home) - Countdown timer with dynamic date display
  2. **Programme** (Schedule) - Church and château timeline with collapsible details
  3. **Réponse** (RSVP) - Google Forms link for confirmation
  4. **Hébergement** (Accommodation) - Canva link with accommodation options
  5. **Transport** - Transport map and parking information
  6. **Photos** - Photographer and guest photo sharing (ZeliPop)
  7. **Cagnotte** (Gift Registry) - IBAN information and honey moon fund
- **Smooth Animations**: Alpine.js transitions between tabs
- **Collapsible Sections**: Details toggle for château schedule and photo sections

**Technologies:**
- HTML5
- Tailwind CSS v4 (via CDN)
- Alpine.js (for reactive components and tab management)
- Alpine.js Collapse plugin (for expandable sections)
- Google Fonts: Cormorant Garamond & Montserrat

**Styling:**
- Custom glass-morphism effect (`.backdrop-blur-glass`)
- Elegant heading font (`.elegant-heading`)
- Fixed background image with blur effect
- Text shadows for readability on background

### `script.js` (81 lines)
Handles data loading and Alpine.js store initialization.

**Functionality:**
- Loads wedding data from URL parameters
- Initializes Alpine store with wedding parameters
- UTF-8 encoding handled correctly for French accented characters
- Parses and formats date/time information

## 🎨 Design System

### Color Scheme
- **Primary**: White with various opacity levels
- **Background**: Fixed position with blur effect
- **Glass Effect**: `rgba(255, 255, 255, 0.15)` with 8-10px backdrop blur
- **Shadows**: Text shadows for readability (2-8px blur)

### Typography
- **Headings**: Cormorant Garamond (serif, weights: 300, 400, 600, 700)
- **Body**: Montserrat (sans-serif, weights: 300, 400, 500)
- **Sizes**: Responsive (text-xl/2xl on mobile, increases with md: breakpoint)

### Spacing
- Glass container: `p-6 md:p-8` (24px/32px padding)
- Tab buttons: `px-3 md:px-4 py-2` (responsive padding)
- Consistent gaps: `gap-1.5`, `gap-4`, `gap-6`, `gap-8`

### Icons
- PNG format with transparency
- Consistent sizing (h-12/w-12 for small, h-32/w-32 for large)
- Drop shadow effects for depth

## 🏗️ Component Architecture

### Alpine.js Components

#### Global Store (`Alpine.store('params')`)
- Initialized with current date as placeholder
- Updated asynchronously after data loading
- Contains:
  - `date`: JavaScript Date object (with timezone)
  - `d`: Event details (ceremony, reception)
  - `h`: Accommodation link
  - `f`: RSVP form link
  - `i`: IBAN for gifts
  - `b`: BIC code

#### Date Display (Computed Property)
- Uses getter `formattedDate` for reactive updates
- Watches `$store.params.date` changes
- Formats to French locale: "11 juillet 2026 • 15h00"

#### Countdown Timer
- Updates every second with `setInterval`
- Watches `$store.params.date` for initial data load
- Calculates: days, hours, minutes, seconds until wedding
- Handles timezone correctly (Paris timezone: UTC+2)

#### Tab Manager (`activeTab`)
- Manages seven tabs with smooth transitions
- Uses Alpine.js `x-show` and `x-transition` directives
- Slide animations (translate-x)

#### Collapsible Sections
- Uses Alpine Collapse plugin
- Toggle buttons with rotating arrow icons
- Smooth expand/collapse animations

## 🎯 Tab Details

### 1. Accueil (Countdown)
- Title: "Nous nous marions !"
- Dynamic date display with timezone handling
- 4-column grid: days, hours, minutes, seconds
- Real-time updates
- Elegant Cormorant Garamond font for numbers

### 2. Programme (Schedule)
- Two main events with icons:
  - **Église**: Church ceremony at 15h00
  - **Château**: Reception from 17h30
- Collapsible details for château timeline:
  - Cocktail: 17h30
  - Repas: 20h30
  - Soirée: 23h00
- Icons with consistent styling

### 3. Réponse (RSVP)
- Google Forms integration
- Deadline: April 24
- Button with hover effects
- Opens in new tab

### 4. Hébergement (Accommodation)
- Canva presentation link
- Recommendation to book early
- Call-to-action button

### 5. Transport
- Transport map image (responsive sizing with max-width)
- Shuttle service information
- Parking availability
- "More info coming" placeholder

### 6. Photos
- Two sections with collapsible details:
  - **Photographer**: Professional photos available 2 months after wedding
  - **Guest Photos**: ZeliPop app instructions
    - Event code: MARIAGEMCCM
    - Password: MCCM
- Circular profile images
- Detailed step-by-step instructions

### 7. Cagnotte (Gift Registry)
- Honeymoon fund message
- IBAN and BIC display from store
- Gift registry image
- Personal message to guests

## 🚀 Deployment

### GitHub Pages
- Hosted at: `https://vincenthays.github.io/wedding/`
- Static site (no backend required)
- URL contains data parameters in hash fragment

### Local Development
```bash
# Open with local server (e.g., Live Server)
# Works at: http://127.0.0.1:5500/index.html#{parameters}
```

## 🔧 How to Update Content

### To Add New Tabs:
1. Add tab content in `index.html` with `x-show="activeTab === 'newtab'"`
2. Add button in navigation section
3. Add `x-transition` directives for smooth animations
4. Match existing styling patterns

### To Update Images:
- Place images in `img/` directory
- Use consistent naming (lowercase, descriptive)
- Optimize for web (compress PNGs/JPGs)
- Maintain transparency for icons

### To Modify Tab Content:
- Edit the corresponding section in `index.html`
- Maintain glass-morphism styling classes
- Keep consistent spacing and typography
- Test responsive behavior on mobile

## 📱 Responsive Breakpoints

- **Mobile**: Base styles (default)
- **Desktop**: `md:` prefix (768px+)
  - Larger text: `text-xl → md:text-2xl`
  - More padding: `p-6 → md:p-8`
  - Wider layouts: `max-w-3xl → max-w-5xl`
  - Grid changes: `grid-cols-1 → md:grid-cols-2`

## ✨ Key Features

1. **No Backend Required**: Pure client-side application
2. **URL-Based Data**: Information passed via URL
3. **UTF-8 Support**: Proper handling of French accents (é, è, à, ô, etc.)
4. **Timezone Aware**: Paris timezone (UTC+2 in summer)
5. **Real-time Countdown**: Live updating timer with watch functionality
6. **Smooth Animations**: Alpine.js transitions and collapse
7. **Glass-morphism Design**: Modern, elegant aesthetic
8. **Mobile-Friendly**: Fully responsive design
9. **Fast Loading**: Minimal dependencies, CDN delivery
10. **Easy Sharing**: Single URL contains all information

## 🎉 Future Enhancement Ideas

- [ ] RSVP integration with backend
- [ ] Photo gallery post-wedding
- [ ] Interactive venue map
- [ ] Music playlist preview
- [ ] Live video stream option
- [ ] Guest messaging board
- [ ] Dietary preference collection
- [ ] Multiple language support
- [ ] QR code generator for URL
- [ ] Email invitation sender
- [ ] Guest check-in system
- [ ] Thank you message post-wedding

## 📝 Development Notes

- Alpine.js reactive system handles async data loading
- `$watch` used for reactive countdown updates
- UTF-8 encoding critical for French accents
- Timezone handling ensures correct date/time display
- All styling is inline or via Tailwind classes
- No separate CSS file needed
- Background image uses fixed positioning for parallax-like effect
