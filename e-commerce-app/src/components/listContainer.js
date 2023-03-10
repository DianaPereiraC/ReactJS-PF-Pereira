import React from "react";
import ItemPreview from "./itemPreview"

function ItemListContainer(props) {
  let { db } = props

  let categoryList = db.map(element => element.categoryId)
  return <>
    <h1 className="my-2 display-1">Welcome to P&P</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit eget elit vel malesuada. Aenean tincidunt, ex id ullamcorper porttitor, nisl ex sagittis purus, eget sagittis ante enim in orci. Vivamus ac tincidunt ligula. Sed vitae ante non mauris dignissim dictum ac in est. Nunc pretium efficitur maximus. Maecenas eget vulputate enim. Sed auctor mauris urna. Aliquam eget nisi mi. Pellentesque ut varius lacus, id congue nisl.
    </p>
    {
      categoryList.map(item => {
        return <ItemPreview
          data={db.find(entry => entry.categoryId === item)}
        />
      })
    }
  </>;
}

export default ItemListContainer