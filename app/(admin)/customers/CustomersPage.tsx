"use client"
import Button from "@/components/lib/Button";
import FlexStack from "@/components/lib/FlexStack";
import Input from "@/components/lib/forms/Input";
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
                <FlexStack>
                    <Input
                        label="Buscar cliente" id="searchCustomer" name="searchText" placeholder="nombre · apellidos · correo · dirección · ciudad"
                        onInput={_.debounce((e) => {
                            refreshCustomers((e.target as HTMLInputElement).value)
                        }, 500)}
                    />
                    <div className="algn-self-start">
                        <Button variant="primary">Buscar socio</Button>
                    </div>
                </FlexStack>
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
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_customers.map((c) => <CustomerRow c={c} key={c.username} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function CustomerRow({c}) {
    const [expandedRow, setExpandedRow] = useState(false)

    return (
        <>
            <tr key={'c.username' + c.id}>
                <th scope="row">{c.customer_id}</th>
                <td>{c.first_name}</td>
                <td>{c.last_name}</td>
                <td>{c.email}</td>
                <td>{c.address}</td>
                <td>{c.district}</td>
                <td>
                    <Button size="sm" onClick={() => {
                        console.log('expandiendo')
                        setExpandedRow(!expandedRow)
                    }} variant="primary">
                        {expandedRow ? 'Contraer' : 'Expandir'}
                    </Button>
                </td>
            </tr>
            {expandedRow && (
                <tr>
                    <td colSpan={7}>
                        <p>Mas información</p>
                    </td>
                </tr>
            )}
        </>
    )
}
