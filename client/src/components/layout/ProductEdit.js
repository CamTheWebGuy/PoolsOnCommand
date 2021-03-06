import React, { useState, useEffect, Fragment } from 'react';
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  Spinner,
  ListGroup,
  InputGroup
} from 'react-bootstrap';
import {
  getOneProduct,
  updateProduct,
  showDeleteItemModal,
  hideDeleteItemModal,
  showAddForm,
  showDeleteProduct
} from '../../actions/products';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Alert from './Alert';

import 'react-quill/dist/quill.snow.css';
import ProductItemForm from './ProductItemForm';
import DeleteConfirmModal from './DeleteConfirmModal';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ProductEdit = ({
  getOneProduct,
  updateProduct,
  showDeleteItemModal,
  hideDeleteItemModal,
  showAddForm,
  showDeleteProduct,
  showAddItemForm: showAddItemForm,
  products: { products, loading },
  match
}) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    content: ''
  });

  const productItems = products.items;

  const [showEditForm, setShowEditForm] = useState({
    clickedBy: ''
  });

  const [showDeleteItemModalClick, setShowDeleteItemModalClick] = useState({
    clickedBy: ''
  });

  const [deleteProductClick, setDeleteProductClick] = useState({
    clickedBy: ''
  });

  const [itemsList, updateItemsList] = useState(null);

  useEffect(() => {
    getOneProduct(match.params.id);
    setFormData({
      name: loading || !products.name ? '' : products.name,
      price: loading || !products.price ? '' : products.price,
      category: loading || !products.category ? '' : products.category
    });
    if (!loading) {
      updateItemsList(productItems);
    }
  }, [loading, getOneProduct]);

  const { name, price, category } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    updateProduct(match.params.id, name, price, category, itemsList);
  };

  const onDeleteItemClick = e => {
    showDeleteItemModal();
  };

  const onDeleteProductClick = e => {
    showDeleteProduct();
    setDeleteProductClick({
      clickedBy: products._id
    });
  };

  const handleOnDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(itemsList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateItemsList(items);
  };

  return products.length < 1 ? (
    <Fragment>
      <Navbar />
      <Alert />
      <section className='members__container'>
        <Container className='pdding-top-50 text-center'>
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </Container>
      </section>
    </Fragment>
  ) : (
    <Fragment>
      <Navbar />
      <Alert />
      <Container>
        <DeleteConfirmModal
          type='product'
          productId={products._id}
          clickedBy={deleteProductClick.clickedBy}
        />{' '}
        <Row>
          <Col md='12'>
            <h2 className='mgn-top-50'>
              Edit Product: <em>{name}</em>
              <Button
                style={{ marginLeft: '15px' }}
                variant='danger'
                type='submit'
                onClick={e => onDeleteProductClick()}
              >
                Delete Product
              </Button>
            </h2>
            <hr />

            <Form className='mgn-top-30' onSubmit={e => onSubmit(e)}>
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  name='name'
                  type='text'
                  placeholder='Product Name'
                  value={name}
                  onChange={e => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Price</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    name='price'
                    type='text'
                    pattern='[0-9, .]+'
                    placeholder='29.99'
                    value={price}
                    onChange={e => onChange(e)}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  name='category'
                  as='select'
                  value={category}
                  onChange={e => onChange(e)}
                >
                  <option>Main Product</option>
                  <option>Bump</option>
                  <option>Upsell</option>
                  <option>Downsell</option>
                </Form.Control>
              </Form.Group>
              <Button variant='primary' type='submit'>
                Save Changes
              </Button>
            </Form>
            <Form className='mgn-top-20'>
              <Form.Group>
                <h3>Items:</h3>
                <hr />
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId='items'>
                    {provided => (
                      <ListGroup
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {!loading &&
                          itemsList != null &&
                          itemsList.map((item, index) => (
                            <Draggable
                              key={item._id}
                              draggableId={item._id}
                              index={index}
                            >
                              {provided => (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <Fragment>
                                    <DeleteConfirmModal
                                      type='item'
                                      itemId={item._id}
                                      productId={products._id}
                                      clickedBy={
                                        showDeleteItemModalClick.clickedBy
                                      }
                                    />{' '}
                                    <ListGroup.Item>
                                      {item.title}{' '}
                                      <Button
                                        variant='success'
                                        type='button'
                                        onClick={e =>
                                          setShowEditForm({
                                            show: !showEditForm.show,
                                            clickedBy: item._id
                                          })
                                        }
                                        style={{ marginLeft: '10px' }}
                                      >
                                        Edit
                                      </Button>
                                      <Button
                                        style={{ marginLeft: '10px' }}
                                        variant='danger'
                                        type='button'
                                        onClick={e => {
                                          onDeleteItemClick(e);
                                          setShowDeleteItemModalClick({
                                            clickedBy: item._id
                                          });
                                        }}
                                      >
                                        Delete
                                      </Button>
                                    </ListGroup.Item>
                                    <ProductItemForm
                                      type='edit'
                                      productId={products._id}
                                      itemId={item._id}
                                      clickedBy={showEditForm.clickedBy}
                                      title={item.title}
                                      content={item.content}
                                      videoContent={item.videoContent}
                                      itemDownload1={item.downloadOne}
                                      itemDownload1Title={item.downloadOneTitle}
                                      itemDownload2={item.downloadTwo}
                                      itemDownload2Title={item.downloadTwoTitle}
                                      show={showEditForm.show}
                                    />
                                  </Fragment>
                                </div>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </ListGroup>
                    )}
                  </Droppable>
                </DragDropContext>

                {showAddItemForm === false ? (
                  <Button
                    className='mgn-top-20'
                    variant='success'
                    type='button'
                    onClick={showAddForm}
                  >
                    Add Item
                  </Button>
                ) : (
                  <div></div>
                )}

                <ProductItemForm
                  type='add'
                  show={showAddItemForm}
                  productId={products._id}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

ProductEdit.propTypes = {
  getOneProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  showDeleteItemModal: PropTypes.func.isRequired,
  hideDeleteItemModal: PropTypes.func.isRequired,
  showAddForm: PropTypes.func.isRequired,
  showDeleteProduct: PropTypes.func.isRequired,
  showAddItemForm: PropTypes.bool.isRequired,
  showDeleteProductModalBool: PropTypes.bool.isRequired,
  products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showAddItemForm: state.products.showAddItemForm,
  showDeleteProductModalBool: state.products.showDeleteProductModalBool,
  products: state.products
});

export default connect(mapStateToProps, {
  getOneProduct,
  updateProduct,
  showDeleteItemModal,
  hideDeleteItemModal,
  showAddForm,
  showDeleteProduct
})(ProductEdit);
