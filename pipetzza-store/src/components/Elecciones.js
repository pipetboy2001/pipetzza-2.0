import React from 'react'
import { Container } from 'react-bootstrap'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { MDBCheckbox } from 'mdb-react-ui-kit';

export const Elecciones = () => {
  return (
    <Container>
    
      <div class="parent" >
        <center>
          <h1>Tipo de pedido</h1>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1}>
              delivery (pre-checked)
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2}>
              Retirar en local
            </ToggleButton>
          </ToggleButtonGroup>
        </center>


        <div class="div1"></div>
        <h2>Tamaño Pizza </h2>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="TamañoPizza" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault3">
            Familiar
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="TamañoPizza" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault4">
            Mediana
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="TamañoPizza" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault4">
            Personal
          </label>
        </div>


        <div class="div2"></div>
        <h2>Tipo de Masa</h2>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="tipoMasa" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            Normal
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="tipoMasa" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault2">
            Delgada
          </label>
        </div>
        <div class="div3"></div>
        <h2>Tipo de queso</h2>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="tipoQueso" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            Gouda
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="tipoQueso" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault2">
            mozzarella
          </label>
        </div>


        <div class="div4"></div>
        <h2>Cantidad de queso </h2>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="cantidadQueso" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault3">
            Normal
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="cantidadQueso" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault4">
            Extra
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="cantidadQueso" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault4">
            Doble
          </label>


        </div>
        <div class="div5"></div>
        <h2>Ingredientes de carnes</h2>
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='carne' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='arne mechada' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='pepperoni' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='salchicha' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='jamón' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='pollo' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='tocino' />


        <h2>Ingredientes vegetaless</h2>
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='aceitunas' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='choclo' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='piña' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='cebolla' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='pimiento,' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='tomate' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='champiñones' />

      </div>
    </Container>

  )
}
