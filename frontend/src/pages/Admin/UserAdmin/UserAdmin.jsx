import React from "react";
import Admin from "../../../layouts/Admin.jsx";
import CardAdmin from "../../../components/CardAdmin/CardAdmin.jsx";
import DataTable from "../../../components/DataTable/DataTable.jsx";
import ModalLarge from "../../../components/ModalLarge/ModalLarge.jsx";
import "./UserAdmin.css";

export default function UserAdmin() {
    return (
        <Admin>
            <div className="sectionAdminSolicitation">
                <h1 className="text-uppercase ms-5 mb-5 text-white">Usuários</h1>
                <div className="d-flex flex-wrap justify-content-start mx-5 gap-5 mb-5 text-white">
                    <CardAdmin title="Total de solicitações">
                        <div className="fs-1 fw-semibold text-center py-3">{ 0 }</div>
                    </CardAdmin>
                </div>

                <div className="table-responsive mx-5 p-4 bg-body rounded shadow-lg">
                    <DataTable idTable="tableSolicitation">
                        <th className="text-center">Id</th>
                        <th className="text-center">Nome</th>
                        <th className="text-center">Setor</th>
                        <th className="text-center">Website</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Opções</th>
                    </DataTable>
                </div>
            </div>

            <ModalLarge idModal="modalLargeSolicitationAdmin" titleModal="Solicitação" 
                Buttons={
                    <>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Recusar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Aceitar</button>
                    </>
                }
            > 
                <div className='row text-white m-auto'>
                    <div className='col-6'>
                        {/* <form action="">
                            <InputGeneral typeInput='text' idInput='name' iconLabel={ <FontAwesomeIcon icon={faUser} /> } placeholder='Nome' isRequired='required' value={selectedArticle.title}/>
                            <InputGeneral typeInput='email' idInput='email' iconLabel={ <FontAwesomeIcon icon={faEnvelope} /> } placeholder='E-mail' isRequired='required' value={selectedArticle.email}/>
                            <InputGeneral typeInput='text' idInput='phone' maskInput='(99) 99999-9999' iconLabel={ <FontAwesomeIcon icon={faPhone} /> } placeholder='Telefone' isRequired='required' value={selectedArticle.phone}/>
                            <InputGeneral typeInput='text' idInput='cnpj' maskInput='99.999.999/9999-99' iconLabel={ <FontAwesomeIcon icon={faFile} /> } placeholder='CNPJ' isRequired='required' value={selectedArticle.cnpj}/>
                            <InputGeneral typeInput='text' idInput='cep' maskInput='99999-999' iconLabel={ <FontAwesomeIcon icon={faLocationDot} /> } placeholder='CEP' isRequired='required' value={selectedArticle.cep}/>
                            <InputGeneral typeInput='text' idInput='sector' iconLabel={ <FontAwesomeIcon icon={faBriefcase} /> } placeholder='Setor' isRequired='required' value={selectedArticle.branch}/>
                        </form> */}
                    </div>
                    <div className='col-6'>
                        {/* <form action="">
                            <InputGeneral typeInput='text' idInput='site' iconLabel={ <FontAwesomeIcon icon={faLink} /> } placeholder='Website' isRequired='required' value={selectedArticle.urlCompany}/>
                            <InputUpload idUpload='image' isRequired='required' />
                            <TextareaGeneral idTextarea='description' iconLabel={ <FontAwesomeIcon icon={faFont} /> } placeholder='Descrição' isRequired='required' height='274px' value={selectedArticle.description} />
                        </form> */}
                    </div>
                </div>
            </ModalLarge>
        </Admin>
    );
}