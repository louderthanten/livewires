# Tabs based on this script from Jack Moore: http://www.jacklmoore.com/notes/jquery-tabs/
$('.tabs').each ->

  # Find the tabs
  $links = $(@).find('a')

  # If the location.hash matches one of the links, use that as the active tab.
  # If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href=\'' + location.hash + '\']')[0] or $links[0])
  $active.addClass 'active'
  $content = $($active.attr('href'))

  # Hide the remaining content
  $links.not($active).each ->
    $($(@).attr('href')).hide()


  # Bind the click event handler
  $(@).on 'click', 'a', (e) ->

    # Make the old tab inactive.
    $active.removeClass 'active'
    $content.hide()

    # Update the variables with the new link and content
    $active = $(@)
    $content = $($(@).attr('href'))

    # Make the tab active.
    $active.addClass 'active'
    $content.show()

    # Prevent the anchor's default click action
    e.preventDefault()