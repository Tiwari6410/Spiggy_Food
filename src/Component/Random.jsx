// const Random =()=>{
//     const [items, setItems] = useState([])
//     const fetchdata =async ()=>{
//         const data = await fetch("https://fakestoreapi.com/products")
//         const json = await data.json();
//         setItems(json)
//     }

const { useState, useEffect } = require("react");

//     console.log(items)
//     useEffect(()=>{
//         fetchdata()
//     },[])


const Random =()=>{
    const[item,setItems] = useState([])

    const fetchData =async()=>{
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();

        setItems(json)
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(item)
    return(
        <div className="flex flex-wrap rounded-sm">
            {
                item.map(items=>{
                    return(
                        <div className="card w-48 bg-slate-100 m-6 p-5" key={items.id}>
                    <div className="cardHeader">
                        <img src={items.image} alt="preveiw" className="h-28 w-32 rounded-md" />
                    </div>
                    <div className="cardbody">
                        <h3 className="font-semibold">Categories:{items.category}</h3>
                        <h3 className="">Discription:{items.description.slice(0,20)}</h3>
                        <h3>Price:{items.price}</h3>
                    </div>
                </div>
                    )
                })
            }
        </div>
    )
}
export default Random;