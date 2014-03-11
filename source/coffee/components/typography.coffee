# Uncomment to make header ampersands fancy
# $('h1:contains("&"),h2:contains("&"),h3:contains("&"),h4:contains("&"),h5:contains("&"),h6:contains("&"),.lead:contains("&"),.content > p:first-child:contains("&")')# .each ->
#   $(@).html($(@).html().replace(/&amp;/, "<abbr class='amp'>&amp;</abbr>"))