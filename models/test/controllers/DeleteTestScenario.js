document.querySelectorAll('.delete-test-scenario').forEach(
    function (button) {
      button.addEventListener(
        'click',
        function (e) {
          e.stopPropagation()
          const modal = document.createElement('div')
          const modalContent = document.createElement('div')
          const modalHeader = document.createElement('div')
          const modalBody = document.createElement('div')
          const modalFooter = document.createElement('div')
          modal.id = 'test-scenario-modal'
          modal.className = 'modal'
          modalContent.className = 'modal-content'
          modalHeader.className = 'modal-header'
          modalBody.className = 'modal-body'
          modalFooter.className = 'modal-footer'
          const headerContent = document.createElement('h1')
          const testScenarioId = this.nextSibling.innerHTML
          const testScenarioTitle = this.nextSibling.nextSibling.innerHTML
          const headerNode = document.createTextNode("Supprimer le scenario " + testScenarioId + '?')
          const bodyContent = document.createElement('p')
          const bodyNode = document.createTextNode("Vous allez définitivement supprimer le scenario suivant : \n" + testScenarioTitle)
          const deleteButton = document.createElement('button')
          const cancelButton = document.createElement('button')
          deleteButton.innerHTML = 'Supprimer'
          deleteButton.className = 'delete-button'
          cancelButton.innerHTML = 'Annuler'
          cancelButton.className = 'cancel-button'
          deleteButton.classList.add('btn', 'btn-danger')
          cancelButton.classList.add('btn', 'btn-light')
          headerContent.appendChild(headerNode)
          bodyContent.appendChild(bodyNode)
          modalHeader.appendChild(headerContent)
          modalBody.appendChild(bodyContent)
          modalFooter.appendChild(cancelButton)
          modalFooter.appendChild(deleteButton)
          modalContent.appendChild(modalHeader)
          modalContent.appendChild(modalBody)
          modalContent.appendChild(modalFooter)
          modal.appendChild(modalContent)
  
          const body = document.querySelector('body')
          body.appendChild(modal)
          modal.style.display = 'block'
  
          window.onclick = function (event) {
            if (event.target === modal) {
              modal.style.display = 'none'
            }
          }
  
          cancelButton.addEventListener(
            'click',
            function (e) {
              modal.style.display = 'none'
            }
          )
  
          deleteButton.addEventListener(
            'click',
            function (e) {
              window.$.delete(
                '../controllers/DeleteTestScenario.php?id=' + testScenarioId,
                {},
                function (returnedData) {
                  console.log(returnedData)
                  location.reload()
                }
              )
            }
          )
        }
      )
    }
  )
  