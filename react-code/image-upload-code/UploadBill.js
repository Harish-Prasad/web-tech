import React, {Component} from 'react';
import './UploadBill.css'

class UploadBill extends Component
{
    state={
             uploadImg:'https://st.depositphotos.com/1742172/1958/v/950/depositphotos_19585095-stock-illustration-cartoon-bill.jpg'
          }
          imageHandler = (e) => {
              const reader = new FileReader();
              reader.onload=() =>{
                  if(reader.readyState === 2){
                      this.setState({uploadImg: reader.result})
                  }
              }
              reader.readAsDataURL(e.target.files[0])
          }
     
    render()
    {
        const {uploadImg} = this.state 
        return(
            <div className="page">
              <div className="container">
                <h1 className="heading">Add your Bill </h1>
                  <div className="img-holder">
                     <img src={uploadImg} alt="Bill" id="img" className="img" />
                  </div>
                <input type="file" name="img-upload" id="input" accept="image/*" onChange={this.imageHandler} />
                    <div className="label">
                         <label for="input" className="img-upload">
                        <i className="material-icons">add-photo</i>
                        Choose your bill
                         </label>
                     </div>
                </div>
            </div>
        )
    }
}
export default UploadBill;