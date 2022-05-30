import { mdiGithub, mdiTwitter, mdiLinkedin } from '@mdi/js';
export function getSocialLinks() {
  return [
      {"name": "github",  "icon": mdiGithub, "url": "https://github.com/hamzamogni"},
      {"name": "twitter", "icon": mdiTwitter,  "url": "https://twitter.com/hamza_mogni"},
      {"name": "linkedin", "icon": mdiLinkedin, "url": "https://www.linkedin.com/in/hamza-mogni"},
  ]
}