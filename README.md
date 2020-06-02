# Infrae static site

## m.infrae.com

Scraped with: 
    wget --mirror --convert-links --adjust-extension --page-requisites --no-parent -o scrape.log http://m.infrae.com

## infrae.com

Scraped with:
    wget --mirror --convert-links --adjust-extension --page-requisites --no-parent -o scrape.log http://infrae.com

## Netlify

Both sites are hosted via netlify. 

Netlify can't handle '#' or '?' in file names. The '?' was found in referenced thumbnail and events urls
The repo was cleaned up with:
    find ./ -name "*\?*" -delete


