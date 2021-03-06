require 'ruble'

bundle do |bundle|
  bundle.author = 'Christopher Williams'
  bundle.copyright = "Copyright 2011 Aptana. Distributed under the MIT license."
  bundle.display_name = t(:bundle_name)
  bundle.description = t(:bundle_description)
  bundle.repository = "git://github.com/aptana/html.ruble.git"

  # Folding
  BLOCK_TAGS = 'body|div|dd|dl|embed|fieldset|form|frame|head|html|menu|object|ol|script|select|style|table|tbody|thead|tfoot|tr|ul' unless defined?(BLOCK_TAGS)
  start_folding = /(?x)
    (<(?i:#{BLOCK_TAGS})\b.*?>
    |<!--(?!.*--\s*>)
    |^<!--\ \#tminclude\ (?>.*?-->)$
    |<\?(?:php)?.*\b(if|for(each)?|while)\b.+:
    |\{\{?(if|foreach|capture|literal|foreach|php|section|strip)
    |\{\s*($|\?>\s*$|\/\/|\/\*(.*\*\/\s*$|(?!.*?\*\/)))
    )/
  end_folding = /(?x)
    (<\/(?i:#{BLOCK_TAGS})>
    |^(?!.*?<!--).*?--\s*>
    |^<!--\ end\ tminclude\ -->$
    |<\?(?:php)?.*\bend(if|for(each)?|while)\b
    |\{\{?\/(if|foreach|capture|literal|foreach|php|section|strip)
    |^[^{]*\}
    )/
  bundle.folding['text.html'] = start_folding, end_folding

  # Indentation
  increase_indent_pattern = /(?x)
    <(?!\?|area|base|br|col|hr|img|input|link|meta|param|[^>]*\/>)
      ([A-Za-z0-9]+)(?=\s|>)\b[^>]*>(?!.*<\/\1>)
    |<!--(?!.*-->)
    |<(([^!\/?]|%|\?)(?!.+?([\/%]>|<\/.+?>))|[%!]--\s*$)
    |<%.+?\b(if|else(?:if)?|for(?:each)?|while)\b.*:(?!.*end\1)
    |<\?php.+?\b(if|else(?:if)?|for(?:each)?|while)\b.*:(?!.*end\1)
    |\{[^}"']*$/
  decrease_indent_pattern = /(?x)
    ^\s*
    (<\/(?!html)
      [A-Za-z0-9]+\b[^>]*>
    |-->
    |<\?(php)?\s+(else(if)?|end(if|for(each)?|while))
    |\}
    )/
  bundle.indent['text.html'] = increase_indent_pattern, decrease_indent_pattern
  bundle.file_types['text.html.sp'] = '*.jsp','*.asp','*.aspx','*.php'
  
  # most commands install into a dedicated rails menu
  # See also the alternative, HAML-style syntax in menu.rrmenu
  
  bundle.menu t("insert.ruby.html.quick_br") do |menu|
    menu.command t(:quick_br)
  end
  
  bundle.menu t("search.ruby.html.validate_syntax") do |menu|
    menu.command t(:validate_syntax)
  end
  
  bundle.menu t("edit.ruby.html.wrap.wrap_selection_in_tag_pair") do |menu|
    menu.command t(:wrap_selection_in_tag_pair)
  end
  bundle.menu t("edit.ruby.html.wrap.wrap_lines_in_tag_pairs") do |menu|
    menu.command t(:wrap_lines_in_tag_pairs)
  end
  
  bundle.menu t("edit.ruby.html.unwrap") do |menu|
    menu.command t(:strip_html_tags)
  end
  
  bundle.menu t("edit.ruby.html.condition_comment.ie") do |menu|
      menu.command t(:ie)
  end
  bundle.menu t("edit.ruby.html.condition_comment.ie_6_and_below") do |menu|
      menu.command t(:ie_6_and_below)
  end
  bundle.menu t("edit.ruby.html.condition_comment.ie_6") do |menu|
      menu.command t(:ie_6)
  end
  bundle.menu t("edit.ruby.html.condition_comment.ie_7_and_above") do |menu|
      menu.command t(:ie_7_and_above)
  end
  bundle.menu t("edit.ruby.html.condition_comment.ie_8_and_above") do |menu|
      menu.command t(:ie_8_and_above)
  end
  bundle.menu t("edit.ruby.html.condition_comment.ie_9_and_above") do |menu|
      menu.command t(:ie_9_and_above)
  end
  
  bundle.menu t("insert.ruby.html.convert_to_entities") do |menu|
      menu.command t(:convert_to_entities)
  end
  bundle.menu t("insert.ruby.html.convert_to_entities_excluding_tags") do |menu|
      menu.command t(:convert_to_entities_excluding_tags)
  end
  bundle.menu t("insert.ruby.html.decode_entities") do |menu|
      menu.command t(:decode_entities)
  end
  
  bundle.menu t("insert.ruby.html.nbsp") do |menu|
      menu.command t(:nbsp)
  end
  
  bundle.menu t("insert.ruby.html.insert_entity") do |menu|
      menu.command t(:insert_entity)
  end
  
  bundle.menu t("insert.ruby.html.insert_tag_pair") do |menu|
      menu.command t(:insert_tag_pair)
  end
  bundle.menu t("insert.ruby.html.insert_close_tag") do |menu|
      menu.command t(:insert_close_tag)
  end
  
  bundle.menu t("insert.ruby.html.html_5") do |menu|
      menu.command t(:html_5)
  end
  
  bundle.menu t("insert.ruby.html.html_4_strict") do |menu|
      menu.command t(:html_4_strict)
  end
  
  bundle.menu t("insert.ruby.html.html_4_transitional") do |menu|
      menu.command t(:html_4_transitional)
  end
  bundle.menu t("insert.ruby.html.xhtml_1_frameset") do |menu|
      menu.command t(:xhtml_1_frameset)
  end
  bundle.menu t("insert.ruby.html.xhtml_1_strict") do |menu|
      menu.command t(:xhtml_1_strict)
  end
  bundle.menu t("insert.ruby.html.xhtml_1_transitional") do |menu|
      menu.command t(:xhtml_1_transitional)
  end
  bundle.menu t("insert.ruby.html.xhtml_11") do |menu|
      menu.command t(:xhtml_11)
  end
  
  bundle.menu t("transfer.ruby.html.url_escape") do |menu|
      menu.command t(:url_escape)
  end
  bundle.menu t("transfer.ruby.html.url_unescape") do |menu|
      menu.command t(:url_unescape)
  end
  
  bundle.menu t("search.ruby.html.docs_for_tag") do |menu|
    menu.command t(:docs_for_tag)
  end
  
  bundle.menu t("select.ruby.select_tag_content") do |menu|
      menu.command t(:select_tag_content)
  end
  bundle.menu t("select.ruby.select_tag_pair_and_content") do |menu|
      menu.command t(:select_tag_pair_and_content)
  end
  
  bundle.menu t(:bundle_name) do |menu|
    # this menu should be shown when any of the following scopes is active:
    menu.scope = [ "text.html" ]
    menu.command t(:docs_for_tag)
    menu.command t(:validate_syntax)
    menu.separator
    menu.command t(:open_doc_in_internal_browser)
    menu.command t(:open_doc_in_default_browser)
    menu.command t(:open_doc_in_running_browser)
    menu.command t(:refresh_running_browsers)
    menu.separator
    menu.menu t(:entities) do |entities|
      entities.command t(:convert_to_entities)
      entities.command t(:convert_to_entities_excluding_tags)
      entities.command t(:decode_entities)
      entities.separator
      entities.command t(:nbsp)
      entities.command t(:right)
      entities.command t(:left)
      entities.command t(:backtab)
      entities.command t(:enter)
      entities.command t(:control)
      entities.command t(:delete)
      entities.command t(:return)
      entities.command t(:tab)
      entities.command t(:backspace)
      entities.command t(:command)
      entities.command t(:down)
      entities.command t(:arrow)
      entities.command t(:up)
      entities.command t(:shift)
      entities.command t(:escape)
      entities.command t(:option)
      entities.separator
      entities.command t(:insert_entity)
    end
    menu.menu t(:url_escapes) do |escapes|
      escapes.command t(:url_escape)
      escapes.command t(:url_unescape)
    end
    menu.command t(:rot_13)
    menu.separator
    menu.command t(:insert_tag_pair)
    menu.command t(:insert_close_tag)
    menu.menu t(:insert_doctype) do |doctype|
      doctype.command t(:html_4_strict)
      doctype.command t(:html_4_transitional)
      doctype.separator
      doctype.command t(:xhtml_1_frameset)
      doctype.command t(:xhtml_1_strict)
      doctype.command t(:xhtml_1_transitional)
      doctype.command t(:xhtml_11)
    end
    menu.separator
    menu.menu t(:includes) do |includes|
      includes.command t(:add_persistent_include)
      includes.command t(:update_document)
      includes.command t(:help_persistent_includes)
    end
    menu.menu t(:format) do |format|
      format.command t(:strong)
      format.command t(:emphasize)
    end
    menu.menu t(:conditional_comments) do |comments|
      comments.command t(:ie_5)
      comments.command t(:ie_55)
      comments.command t(:ie_5x)
      comments.command t(:ie_6_and_below)
      comments.command t(:ie_6)
      comments.command t(:ie_7_and_above)
      comments.command t(:ie)
      comments.command t(:not_ie)
    end
    menu.separator
    menu.command t(:select_tag_pair_and_content)
    menu.command t(:select_tag_content)
    menu.separator
    menu.command t(:wrap_selection_in_tag_pair)
    menu.command t(:wrap_lines_in_tag_pairs)
    menu.command t(:wrap_in_jsp_tag)
    menu.separator
    menu.command t(:strip_html_tags)
  end
end

# Add special ENV vars
env "text.html" do |e|
  e['TM_COMMENT_START'] = "<!-- "
  e['TM_COMMENT_END'] = " -->"
  e['TM_HTML_EMPTY_TAGS'] = 'area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param'
  e.delete('TM_COMMENT_START_2')
  e.delete('TM_COMMENT_END_2')
  e.delete('TM_COMMENT_DISABLE_INDENT')
end

# Smart character pairs
# smart_typing_pairs["text.html"] = ['<', '>'] # Commented out. If you want specific TextMate-like functionality, uncomment to re-enable.
smart_typing_pairs["text.html meta.tag - punctuation.definition.tag.begin"] = ['"', '"', '(', ')', '{', '}', '[', ']', "'", "'"]
