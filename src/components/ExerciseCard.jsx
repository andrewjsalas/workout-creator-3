import { 
  Card, 
  Form, 
  Button, 
  Container, 
  Row, 
  Col, 
  InputGroup 
} from 'react-bootstrap'

const ExerciseCard = () => {
  return (
    <>
      <Container>
        <Card className='exercise-card'>
          <Card.Body>

            <Card.Header className='card-header mb-4'>
              <Form className='justify'>
                <Row className='mb-3'>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Control type='text' placeholder='Workout Name' />
                    </Form.Group>
                  </Col>
                  {/* Select Day of the Week */}
                  <Col sm={5}>
                    <Form.Group>
                      <Form.Select >
                        <option>Select Day of the Week</option>
                        <option value='Sunday'>Sunday</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                        <option value='Saturday'>Saturday</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={1}>
                    <Button className='float-end' variant='danger'>X</Button>
                  </Col>

                  
                </Row>
              </Form>
            </Card.Header>

            {/* Exercise Form */}
            <Form className='exercise-form'>  
              {/* Exercise Name */}
              <Form.Group className='mb-3' >
                <Form.Control type='text' placeholder='Exercise Name' />
              </Form.Group>
              
              {/* Set & Rep*/}
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Control type='text' placeholder='Set' />
                </Form.Group>
                <Form.Text className='text-center' as={Col}>X</Form.Text>
                <Form.Group as={Col}>
                  <Form.Control type='text' placeholder='Rep' aria-describedby='repHelpBlock' />
                  <Form.Label className='' id='repHelpBlock' muted>
                    Seperate individual reps with a comma.
                  </Form.Label>
                </Form.Group>
              </Row>
              
              {/* Duration & Rest */}
              <Row className='mb-3'>
                <InputGroup as={Col}>
                  <Form.Control type='text' placeholder='Duration' />
                  <Form.Select>
                    <option>Min/Sec</option>
                    <option value='minutes'>Minutes</option>
                    <option value='seconds'>Seconds</option>
                  </Form.Select>
                </InputGroup>

                <InputGroup as={Col}>
                  <Form.Control type='text' placeholder='Rest' />
                  <Form.Select>
                    <option>Min/Sec</option>
                    <option value='minutes'>Minutes</option>
                    <option value='seconds'>Seconds</option>
                  </Form.Select>
                </InputGroup>
              </Row>

              {/* Notes */}
              <Form.Group className='mb-3'>
                <Form.Control as='textarea' rows={3} placeholder='Notes' />
              </Form.Group>
            </Form>
            <hr className='hr-break' />

            {/* Add/Submit Buttons */}
            <Button 
              className='me-3' 
              variant='success' 
              type='submit'
              >Add Exercise
            </Button>
            <Button 
              className='me-3' 
              variant='primary' 
              type='submit'
              >+ New Exercise
            </Button>
            <Button 
              className='float-end' 
              type='submit' 
              variant='dark'
              >Submit Workout
            </Button>

          </Card.Body>
        </Card>

      </Container>
    </>
  )
}

export default ExerciseCard