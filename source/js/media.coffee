# Uncomment to remove CMS-generated <p> elements around media
#$('.content > p > img, .content > p > iframe, .content > p > input').each ->
#  $(@).unwrap('p')

# Wrap inline videos and maps in flexible figures so they are responsive
$('.content > iframe').each ->
  source = $(@).attr 'src'
  map = /maps.google/
  isMap = map.test(source)
  if(isMap)
    $(@).wrap '<figure class="map"></figure>'
  else
    $(@).wrap '<figure class="video"></figure>'

#Enable responsive video with Fitvids http://fitvidsjs.com/
$('.video').fitVids()