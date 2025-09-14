# IEEE OMAN CTF 2025 Theme

A professional dark theme designed for IEEE Oman Section CTF competitions, featuring modern design elements and beautiful maroon/dark color schemes.

## Installation

1. Download or clone this theme
2. Copy the theme folder to your CTFd installation's `CTFd/themes/` directory
3. Rename the folder to `ieee-ctf-2025` (or your preferred name)
4. In CTFd admin panel, go to Admin Panel > Config > Appearance
5. Select "ieee-ctf-2025" from the Theme dropdown
6. Save changes

## Features

- **Dark theme optimized** - Professional dark color scheme
- **IEEE branding integration** - Custom IEEE Oman branding elements
- **Responsive design** - Works perfectly on all device sizes
- **Modern UI components** - Beautiful cards, buttons, and interactive elements
- **Complete template coverage** - All CTFd pages styled consistently
- **Accessibility compliant** - Proper semantic HTML and ARIA labels
- **Mobile-first approach** - Optimized for mobile devices

## Customization

### Colors
The theme uses CSS custom properties for easy color customization. Edit `assets/css/ieee-ctf-theme.css`:

```css
:root {
    --bg: #0b0b0d;           /* Background */
    --panel: #121216;        /* Card/panel background */
    --maroon: #7e0e1f;       /* Primary maroon */
    --maroon-2: #a01628;     /* Secondary maroon */
    --ink: #d6d7db;          /* Text color */
    --muted: #9aa0a6;        /* Muted text */
    --border: #2a2a30;       /* Border color */
    --success: #10b981;      /* Success color */
    --ieee-blue: #00629B;    /* IEEE blue accent */
}
```

### Logo
Replace the logo in `assets/img/logo.png` with your own logo (recommended size: 420px wide).

### Content
Update the following in your CTFd admin panel:
- **CTF Name**: Admin Panel > Config > General
- **Description**: Admin Panel > Config > General  
- **Rules**: Admin Panel > Config > General
- **Start/End times**: Admin Panel > Config > General

## File Structure

```
ieee-ctf-2025/
├── theme.json              # Theme configuration
├── README.md              # This file
├── assets/
│   ├── css/
│   │   └── ieee-ctf-theme.css    # Main theme styles
│   ├── js/
│   │   └── ieee-ctf-theme.js     # Theme JavaScript
│   └── img/
│       ├── favicon.ico           # Favicon
│       └── logo.png             # Main logo
└── templates/
    ├── base.html                # Base template
    ├── index.html              # Homepage
    ├── login.html              # Login page
    ├── register.html           # Registration page
    ├── challenges.html         # Challenges listing
    ├── challenge.html          # Individual challenge
    ├── scoreboard.html         # Scoreboard
    ├── settings.html           # User settings
    ├── components/
    │   ├── navbar.html         # Navigation bar
    │   ├── notifications.html  # Flash messages
    │   └── errors.html        # Error display
    ├── errors/
    │   ├── 404.html           # 404 error page
    │   ├── 403.html           # 403 error page
    │   └── 500.html           # 500 error page
    ├── teams/
    │   ├── teams.html         # Teams listing
    │   ├── new_team.html      # Create team
    │   └── join_team.html     # Join team
    └── users/
        └── users.html         # Users listing
```

## Browser Support

- Chrome >= 80
- Firefox >= 75  
- Safari >= 13
- Edge >= 80

## CTFd Compatibility

- CTFd >= 3.0.0

## License

MIT License - See LICENSE file for details

## Support

For support or customization requests, please contact IEEE Oman Section.