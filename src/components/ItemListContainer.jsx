import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data/products.json';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();


    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        })
            .then((response) => {
                if (!id) {
                    setItems(response);
                } else {
                    const filtered = response.filter(i => i.category === id);
                    setItems(filtered)
                }
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return <Container className="d-flex justify-content-center align-items-center vh-100">Cargando...</Container>;

    if (items.length === 0)
        return <Container className='mt-4'>No hay productos disponibles</Container>;

    return (
        <Container className="mt-4">
            <h1>Nuestros Productos</h1>
            <div className="d-flex flex-wrap">
                {items.map((i) => (
                    <Card key={i.id} style={{ width: "18rem", margin: "1rem" }}>
                        <Card.Img variant="top" src={i.img} height={200} />
                        <Card.Body>
                            <Card.Title>{i.name}</Card.Title>
                            <Card.Text>
                                {i.detail}
                            </Card.Text>
                            <Card.Text>
                                {i.category}
                            </Card.Text>
                            <Link to={`/item/${i.id}`}>
                                <Button variant="primary">Ver producto</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};
