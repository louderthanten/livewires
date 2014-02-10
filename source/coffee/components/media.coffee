# Wrap inline videos and maps in flexible figures so they are responsive
$('.content > p > img, .content > p > iframe, .content > p > input').each ->
  $(@).unwrap('p')

$('.content > iframe').each ->
  source = $(@).attr 'src'
  map = /maps.google/
  isMap = map.test(source)
  if(isMap)
    $(@).wrap '<figure class="map"></figure>'
  else
    $(@).wrap '<figure class="video"></figure>'

# Wrap inline images in figure tags so they are responsive
$('.content > img, .content > p > img').wrap '<figure></figure>'

#Enable responsive video with Fitvids http://fitvidsjs.com/
$('.video').fitVids()