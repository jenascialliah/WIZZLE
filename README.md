# WIZZLE

WizZle is a riddle quiz game originally built with Python Tkinter. This cleaned deployment package includes:

- `public/` - browser-playable version for Azure Static Web Apps
- `desktop/` - simplified Python desktop version
- `legacy/` - preserved original source files for reference

## Local testing

### Web version
Serve the `public` folder through a local web server, or place the full `WIZZLE` folder under XAMPP htdocs and open:

`http://localhost/WIZZLE/public/`

### Python version
Run:

`py desktop/main.py`

## Azure Static Web Apps
Use these settings:
- App location: `public`
- API location: *(leave blank)*
- Output location: *(leave blank)*
