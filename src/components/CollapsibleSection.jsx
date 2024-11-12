import React, { useState } from "react"

const CollapsibleSection = ({product}) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false)
  const [isMaterialsVisible, setMaterialsVisible] = useState(false)
  const [isShippingVisible, setShippingVisible] = useState(false)

  const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);
  const toggleMaterials = () => setMaterialsVisible(!isMaterialsVisible);
  const toggleShipping = () => setShippingVisible(!isShippingVisible);


    return(
        <div className="collapsible-section d-flex flex-column w-100">
            <div className="d-flex justify-content-between align-items-center">
                <p className="aditional-info text-uppercase">Descripción</p>
                <p className="plus btn border border-0" onClick={toggleDescription}>{isDescriptionVisible ? "-" : "+"}</p>
            </div>    
            {isDescriptionVisible && (
                <div className="content">
                    <p>{product.description}</p>
                </div>
            )}
          
            <div className="d-flex justify-content-between align-items-center">
                <p className="aditional-info text-uppercase">Materiales</p>
                <p className="plus btn border border-0" onClick={toggleMaterials}>{isMaterialsVisible ? "-" : "+"}</p>
            </div>
            {isMaterialsVisible && (
               <div className="content">
                    <p>{product.materials}</p>
                </div>
            )}

            <div className="d-flex justify-content-between align-items-center">
                <p className="aditional-info text-uppercase">Envío</p>
                <p className="plus btn border border-0" onClick={toggleShipping}>{isShippingVisible ? "-" : "+"}</p>
            </div>
            {isShippingVisible && (
                <div className="content">
                <p>{product.shipping}</p>
                </div>
            )}
        </div>
    )
}

export default CollapsibleSection