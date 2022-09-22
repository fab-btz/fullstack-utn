import React from 'react';
import "../../styles/components/pages/ResumeSection.css";

function ResumeSection() {
  return (
    <div className="container-xxl resume">
      <div className="page-header">
        <div className="row">
          <div className="col-lg-12">

            <h1>Resumen</h1>
            <p className="lead">Sal de tu zona de confort. Siéntete incómodo, solo así buscaras la forma de mejorar la situación y empezaras a notar cambios.</p>
          </div>

          <div className="col-md-6">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header"><h4>Rachel Design</h4> Asunsión,Paraguay</div>
              <div className="card-body">
                <h5 className="card-title">Area de Sistemas - Lider de Proyecto</h5>
                <h6 className="card-subtitle text-muted">2007-2008</h6>
                <p className="card-text" style={{ marginTop: '15px' }}>
                  Selección y puesta en marcha de un sistema
                  informatico. Implementación. Ademas, realice el stock general y
                  mantenimiento. Manejo del personal, pago de comisiones a vendedoras.
                  Manejo de caja, arqueo y pagos a proveedores. Este trabajo fue por
                  contrato temporal.
                  <br></br><br></br>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header"><h4>Generos Moda Urbana</h4> Corrientes, Argentina</div>
              <div className="card-body">
                <h5 className="card-title">Jefe de Sistemas y del personal</h5>
                <h6 className="card-subtitle text-muted">2010-2013</h6>
                <p className="card-text" style={{ marginTop: '15px' }}>
                  Control de Stock de casa central y de sus 3
                  sucursales. Mantenimiento y back-up del sistema de todos los locales, alta de
                  mercadería, carga de compras, manejo de Cta. Cte. de
                  Proveedores y Clientes. Control del personal. Control de las cajas diarias
                  de las sucursales. Análisis de ventas.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header"><h4>Rectificaciones Ruta 11 S.A.</h4> Corrientes, Argentina</div>
              <div className="card-body">
                <h5 className="card-title">Administrativo Contable - Contador Junior</h5>
                <h6 className="card-subtitle text-muted">2008-2010</h6><br></br>
                <p className="card-text" style={{ marginTop: '15px' }}>
                  Manejo de cuentas corrientes de proveedores
                  (recepción de mercadería, reposición, control de facturación,
                  devoluciones, notas de créditos y débitos reclamos, pedidos) y de
                  clientes (facturación, recibos oficiales, remitos). Trámites bancarios y
                  pagos de gastos. Mantenimiento de stock. Reparé problemas en las
                  computadoras de la empresa. 
                  <br></br><br></br><br></br><br></br>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header"><h4>Tecno Accion S.A. </h4> Corrientes, Argentina</div>
              <div className="card-body">
                <h5 className="card-title">NOC - Operador de Comunicaciones</h5>
                <h6 className="card-subtitle text-muted">2015- Actualidad</h6>
                <p className="card-text" style={{ marginTop: '15px' }}>
                  Me desempeñe durante 6 años como Ayudante Tecnico en el sector de
                  telecomunicacion y redes. Intalacion y configuración de sitios (Remotos)
                  y de las Bases con tecnologias como Radios Cirronet, Murrata, Ubiquiti,
                  Vsat saltelitales, módems GPRS / 4G y por VPN. Diagnosticaba fallas 
                  o falta de servicio de algun remoto, base o localidad.
                  Mayo 2021: asendí al NOC (Network
                  Operations Center), puesto que desempeño en la actualidad,
                  como Operador en el departamento de Comunicaciones
                  del Pais, resolviendo problemas, configurando equipos y dando
                  asistencia técnica a nivel pais.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ResumeSection;