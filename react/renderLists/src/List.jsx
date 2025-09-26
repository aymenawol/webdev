function List(props) {

    // fruits.sort((a,b)=>a.name.localeCompare(b.name))
    // fruits.sort((a,b)=>a.calories-b.calories)
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

    // const lowListItems = lowCalFruits.map(fruit => <li>{fruit.name}: {fruit.calories}</li>)
    // const highListItems = highCalFruits.map(fruit => <li>{fruit.name}: {fruit.calories}</li>)
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}:&nbsp;<b>{item.calories}</b></li>)
    
    return (
        <>
            <div className="container">
                <div className="all">
                    <h6>All fruits</h6>
                    <ol>{listItems}</ol>
                </div>

                {/* <div className="low">
                    <h6>Low Cal fruits</h6>
                    <ol>{lowListItems}</ol>
                </div>

                <div className="high">
                    <h6>High Cal fruits</h6>
                    <ol>{highListItems}</ol>
                </div> */}
            </div>


        </>
    )
}

export default List