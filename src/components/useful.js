<div style={{display:"flex"}}>
<p className="productspecification">OS</p>
<p className="productspecification">Android Oreo 8.1</p>
</div>

<div style={{display:"flex"}}>
<p className="productspecification">OS</p>
<p className="productspecification">Android Oreo 8.1</p>
</div>

<div style={{display:"flex"}}>
<p className="productspecification">OS</p>
<p className="productspecification">Android Oreo 8.1</p>
</div>

<div style={{display:"flex"}}>
<p className="productspecification">OS</p>
<p className="productspecification">Android Oreo 8.1</p>
</div>

<div style={{display:"flex"}}>
<p className="productspecification">OS</p>
<p className="productspecification">Android Oreo 8.1</p>
</div>

{for(let i=0;i<5;i++)
{
  <Singleproduct specific={i} specificdetail={productdata.productDetail.productSpecification[i]}/>
}}


<div>

  <div>
    <p className="productspecification">{props.specific}</p>
  </div>

  <div>
    <p className="productspecification">{props.specificdetail}</p>
  </div>

</div>
