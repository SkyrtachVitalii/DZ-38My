import "./Autos.scss";
import Auto from "../../components/Auto/Auto";

let autos= [
    {
      id: 0,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 1,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 2,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 3,
      title: "Tesla",
      price: "$40000",
      description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
      img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 4,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 5,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 6,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 7,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 8,
      title: "Tesla",
      price: "$40000",
      description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
      img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 9,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 10,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 11,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 12,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 13,
      title: "Tesla",
      price: "$40000",
      description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
      img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
      id: 14,
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    }
  ]
  
  let autosItems = autos.map((auto, index) =>{
    return <Auto auto={auto} key={index}/>
  })

  function Autos() {
      return (
          <div className="Autos">
              <h1>Сторінка автівок</h1>
              <div className="autos-container">
                  {autosItems}
              </div>
          </div>
      )
  }

  export default Autos;