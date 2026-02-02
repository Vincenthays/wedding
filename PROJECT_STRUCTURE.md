# Wedding Website - Project Structure

## 📁 Project Overview

This is an elegant single-page wedding website with a countdown timer, event details, and accommodation information. The website uses a modern glass-morphism design with smooth animations.

## 🗂️ File Structure

```
wedding-website/
├── index.html          # Main HTML file (single-page application)
├── script.js           # JavaScript for URL parameter handling
├── url.py              # Python utility to generate URLs with encoded data
├── background.png      # Background image for the website
├── .gitignore         # Git ignore file (ignores *.py files)
└── PROJECT_STRUCTURE.md # This file
```

## 📄 File Descriptions

### `index.html` (152 lines)
The main and only HTML page for the wedding website.

**Key Features:**
- **Responsive Design**: Works on mobile and desktop
- **Glass-morphism UI**: Elegant frosted glass effect with backdrop blur
- **Three-tab Interface**: 
  1. **Accueil** (Home) - Countdown timer
  2. **Détails** (Details) - Event information
  3. **Hébergement** (Accommodation) - Link to accommodation guide
- **Smooth Animations**: Alpine.js transitions between tabs

**Technologies:**
- HTML5
- Tailwind CSS v4 (via CDN)
- Alpine.js (for reactive components and tab management)
- Google Fonts: Cormorant Garamond & Montserrat

**Styling:**
- Custom glass-morphism effect (`.backdrop-blur-glass`)
- Elegant heading font (`.elegant-heading`)
- Fixed background image with blur effect

### `script.js` (6 lines)
Handles URL parameter decoding and Alpine.js store initialization.

**Functionality:**
- Decodes base64-encoded URL parameters
- Parses JSON data from URL
- Initializes Alpine.js global store with:
  - `params.t`: Wedding date/time
  - `params.d`: Event details dictionary
  - `params.date`: Parsed Date object

### `url.py` (19 lines)
Python utility script to generate URLs with encoded wedding data.

**Purpose:**
- Encodes wedding information in base64 JSON format
- Opens browser with encoded URL parameters
- Allows dynamic content without server-side logic

**Data Structure:**
```python
{
    't': '2026-07-11T15:00:00',  # Wedding date & time (ISO 8601)
    'd': {                        # Event details dictionary
        'Cérémonie': 'Eglise',
        'Réception': 'Château de La Gruerie',
        'Hébergement': 'Hôtel',
        'Liste de mariage': 'https://www.example.com/registry'
    }
}
```

### `background.png`
Background image displayed on the website with blur effect.

### `.gitignore`
Excludes Python files (`*.py`) from version control.

## 🎨 Design System

### Color Scheme
- **Primary**: White with various opacity levels
- **Background**: Custom image with fixed position
- **Glass Effect**: `rgba(255, 255, 255, 0.15)` with 8-10px backdrop blur

### Typography
- **Headings**: Cormorant Garamond (serif, weights: 300, 400, 600, 700)
- **Body**: Montserrat (sans-serif, weights: 300, 400, 500)
- **Text Shadows**: Subtle shadows for readability on background

### Spacing
- Glass container: `p-6 md:p-8` (24px/32px padding)
- Tab buttons: `px-6 py-2` (24px horizontal, 8px vertical)
- Consistent gaps: `gap-2`, `gap-4`, `gap-8`

## 🔄 Data Flow

```
url.py
  ↓ (generates base64 encoded URL)
URL Parameters (?base64data)
  ↓ (decoded by script.js)
Alpine.js Store
  ↓ (accessed by index.html)
Dynamic Content Display
```

## 🏗️ Component Architecture

### Alpine.js Components

#### Tab Manager (`x-data="{ activeTab: 'countdown' }"`)
- Manages active tab state
- Controls tab visibility and transitions

#### Countdown Timer
- Updates every second
- Calculates days, hours, minutes, seconds until wedding
- Auto-initializes on page load

#### Date Formatter
- Formats wedding date to French locale
- Displays as: "11 juillet 2026 • 15h00"

#### Event Details
- Iterates through `$store.params.d` dictionary
- Displays key-value pairs dynamically

## 🎯 Tab Structure

### 1. Accueil (Countdown)
- 4-column grid with countdown units
- Real-time updating every second
- Large elegant numbers with labels

### 2. Détails (Event Details)
- Centered layout
- Dynamic content from URL parameters
- Dress code information
- Divider lines for elegance

### 3. Hébergement (Accommodation)
- Welcome message
- External link to Canva accommodation guide
- Opens in new tab (`target="_blank"`)
- Call-to-action button with hover effects
- Booking reminder text

## 🚀 Deployment

### GitHub Pages
- Hosted at: `https://vincenthays.github.io/wedding/`
- Static site (no backend required)
- URL parameters passed in query string

### Local Development
- Open `index.html` with a local server (e.g., Live Server)
- Use `url.py` to generate properly formatted URLs
- Works at: `http://127.0.0.1:5500/index.html?{encodedData}`

## 🔧 How to Update Content

### To Change Wedding Information:
1. Edit `url.py` data dictionary
2. Update date (`t`) or details (`d`)
3. Run script to generate new URL
4. Share updated URL with guests

### To Add New Tabs:
1. Add new tab content in `index.html` with matching `x-show` condition
2. Add new button in tab navigation section
3. Update `@click` to set new tab name
4. Maintain consistent styling and transitions

### To Change Accommodation Link:
Edit the `href` in the accommodation tab section (line ~143):
```html
<a href="YOUR_NEW_LINK" target="_blank">
```

## 📱 Responsive Breakpoints

- **Mobile**: Base styles
- **Desktop**: `md:` prefix (768px+)
  - Larger text sizes
  - Increased padding
  - Wider layouts

## ✨ Key Features

1. **No Backend Required**: Pure client-side application
2. **URL-Based Content**: All data encoded in URL
3. **Smooth Animations**: Alpine.js transitions
4. **Glass-morphism Design**: Modern, elegant aesthetic
5. **Real-time Countdown**: Live updating timer
6. **Mobile-Friendly**: Fully responsive
7. **Fast Loading**: Minimal dependencies, CDN delivery
8. **Easy Sharing**: Single URL contains all information

## 🔐 Notes

- Python files are gitignored to avoid exposing internal scripts
- All styling is inline (no separate CSS file)
- All JavaScript logic is in script.js (minimal, focused)
- Background image should be optimized for web (compressed)

## 🎉 Future Enhancement Ideas

- Add RSVP functionality (requires backend)
- Photo gallery section
- Interactive map for venue location
- Gift registry integration
- Email notifications
- Guest list management
- Music playlist preview
- Schedule timeline
- FAQ section
