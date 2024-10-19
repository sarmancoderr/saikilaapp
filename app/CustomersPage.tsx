"use client"
import _ from "lodash";
import { useState } from "react";

export default function CustomersPage({ customers }) {
    const [_customers, set_Customers] = useState(customers)

    const refreshCustomers = async (searchText) => {
        const req = await fetch('/api/customers/list?search=' + searchText)
        const res = await req.json()
        set_Customers(res)
    }

    return (
        <div>
            <h2>Listado de clientes</h2>
            <form onSubmit={async (e) => {
                e.preventDefault()
                const fd = new FormData(e.target as HTMLFormElement)
                refreshCustomers(fd.get('searchText'))
            }}>
                <div className="mb-3">
                    <label htmlFor="searchText" className="form-label">
                        Buscar cliente
                    </label>
                    <input
                        onInput={_.debounce((e) => {
                            refreshCustomers((e.target as HTMLInputElement).value)
                        }, 500)
                        }
                        placeholder="nombre · apellidos · correo · dirección · ciudad"
                        name="searchText"
                        className="form-control"
                        id="searchText"
                        aria-describedby="searchTextHelp"
                    />
                    <div id="searchTextHelp" className="form-text">
                        Introduzca el texto de la busqueda
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Buscar socio
                </button>
            </form>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <th scope="col">Calle</th>
                            <th scope="col">Ciudad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_customers.map((c) => (<tr key={c.id}>
                            <th scope="row">{c.customer_id}</th>
                            <td>{c.first_name}</td>
                            <td>{c.last_name}</td>
                            <td>{c.email}</td>
                            <td>{c.address}</td>
                            <td>{c.district}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}