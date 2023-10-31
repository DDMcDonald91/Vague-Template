import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Form, Table, Modal, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { db } from '../../firebase.js'
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function Contacts() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [modalOpen, setModalOpen] = useState(false);
    const [newContact, setNewContact] = useState({ 
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: ''
    });

    const fetchContacts = async () => {
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "contacts"));
            const contactList = querySnapshot.docs.map((doc) => doc.data());
            setData(contactList);
            console.log(contactList)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }   
    }
    
    useEffect(() => {fetchContacts()}, [])

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const addContact = async () => {
        // Add a new document with a generated id.
        await addDoc(collection(db, "contacts"), {
            name: {
                first: newContact.firstName,
                last: newContact.lastName,
            },
            email: newContact.email,
            phone: newContact.phone,
            occupation: newContact.occupation
        });

        fetchContacts();
        setModalOpen(false);
    }

    const filteredContacts = data ? data.filter(contact => {
        const fullName = `${contact.name.first} ${contact.name.last}`.toLowerCase()
        return fullName.includes(searchTerm.toLowerCase())
    }) : []


    // form component
    const ContactForm = () => {
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setNewContact(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    
        return (
            <Form onSubmit={addContact}>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" value={newContact.firstName} 
                        onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" value={newContact.lastName}
                        onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" value={newContact.email}
                        onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input type="tel" name="phone" id="phone" value={newContact.phone}
                        onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="occupation">Occupation</Label>
                    <Input type="text" name="occupation" id="occupation" value={newContact.occupation}
                        onChange={handleInputChange} />
                </FormGroup>
                <Button color="primary" type="submit">Add Contact</Button>
            </Form>
        )
    }
    

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Card style={{maxWidth: '40rem'}} align='center'>
                <CardHeader>
                    <div className="d-flex justify-content-between align-items-center">
                        Contact List
                        <input 
                            type="text" 
                            placeholder="Search by name" 
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="table-responsive">
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Occupation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredContacts.length > 0 ? (
                                    filteredContacts.map((contact, index) => (
                                        <tr key={index}>
                                            <th scope="row">#{index}</th>
                                            <td>{contact.name.first} {contact.name.last}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td>{contact.occupation}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No matching contacts</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </CardBody>          
            </Card>
            <Button color="primary" className='mt-3' onClick={() => setModalOpen(true)}>Add New Contact</Button>

            <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
                <ModalBody>
                    <ContactForm />
                </ModalBody>
            </Modal>
        </>
    )
}
