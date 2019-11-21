import React, {Component} from 'react'

export default ({meta_tags})=>{
  let meta_tag_html = meta_tags.map(tag => {
    return (<p key={tag}>{tag}</p>)
  })
  return (
    <div>
      {meta_tag_html}
    </div>
  )
}