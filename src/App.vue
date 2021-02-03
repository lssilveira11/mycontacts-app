<template>
  <div id="app" class="container">
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">MyContacts</a>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">New Contact</button>
    </form>
  </nav>
    <ul class="list-group">
      <li href="#" class="list-group-item list-group-item-action">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto">
            <h5>João da Silva</h5>            
            <small class="d-block">joao@gmail.com</small>
            <small class="d-block">+55 19 99756-1234</small>
          </div>
          <div class="col-auto">
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-outline-secondary">Details</button>

              <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" href="#">Edit</a>
                  <a class="dropdown-item text-danger" href="#">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li href="#" class="list-group-item list-group-item-action">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto">
            <h5>Maria da Silva</h5>            
            <small class="d-block">maria@example.com</small>
            <small class="d-block">+55 19 99756-1234</small>
          </div>
          <div class="col-auto">
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-outline-secondary">Details</button>

              <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" href="#">Edit</a>
                  <a class="dropdown-item text-danger" href="#">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li href="#" class="list-group-item">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
</style>
