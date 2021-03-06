document.querySelectorAll('.end-sprint').forEach(
  function (button) {
    button.addEventListener(
      'click',
      function () {
        const modal = document.createElement('div')
        const modalContent = document.createElement('div')
        const modalHeader = document.createElement('div')
        const modalBody = document.createElement('div')
        const modalFooter = document.createElement('div')
        modal.id = 'end-sprint-modal'
        modal.className = 'modal'
        modalContent.className = 'modal-content'
        modalHeader.className = 'modal-header'
        modalBody.className = 'modal-body'
        modalFooter.className = 'modal-footer'
        const headerContent = document.createElement('h1')
        const sprintId = this.parentNode.parentNode.parentNode.id.split('-')[1]
        const sprintTitle = this.parentNode.previousSibling.previousSibling.innerText.split(' - ')[0]
        const headerNode = document.createTextNode('Terminer le sprint ' + sprintId + '?')
        const bodyContent = document.createElement('div')
        const bodyNode = document.createElement('div')
        const bodyNodeText = document.createTextNode('Vous allez terminer le sprint suivant : \n' + sprintTitle)
        bodyNode.appendChild(bodyNodeText)
        const bodyWarning = document.createElement('div')
        const bodyWarningText = document.createTextNode('Voulez vous faire une release? Ce ne sera pas possible plus tard.')
        bodyWarning.appendChild(bodyWarningText)
        const releaseButton = document.createElement('button')
        const deleteButton = document.createElement('button')
        const cancelButton = document.createElement('button')
        deleteButton.innerHTML = 'Terminer'
        deleteButton.className = 'delete-button'
        cancelButton.innerHTML = 'Annuler'
        cancelButton.className = 'cancel-button'
        releaseButton.innerHTML = 'Release'
        releaseButton.className = 'release-button'
        deleteButton.classList.add('btn', 'btn-danger')
        cancelButton.classList.add('btn', 'btn-light')
        releaseButton.classList.add('btn', 'btn-warning')
        headerContent.appendChild(headerNode)
        bodyContent.appendChild(bodyNode)
        bodyContent.appendChild(bodyWarning)
        modalHeader.appendChild(headerContent)
        modalBody.appendChild(bodyContent)
        modalFooter.appendChild(cancelButton)
        modalFooter.appendChild(deleteButton)
        modalFooter.appendChild(releaseButton)
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
            body.removeChild(modal);
          }
        }

        cancelButton.addEventListener(
          'click',
          function (e) {
            modal.style.display = 'none'
            body.removeChild(modal);
          }
        )

        releaseButton.addEventListener(
          'click', 
          function() {
            window.location.replace("http://localhost/models/release/views/ReleaseView.php");
        })

        deleteButton.addEventListener(
          'click',
          function (e) {
            modal.style.display = 'none'
            window.$.delete(
              '../../sprint/controllers/EndSprint.php?id=' + sprintId,
              {},
              function (returnedData) {
                console.log(returnedData)
                body.removeChild(modal);
                location.reload()
              }
            )
          }
        )
      }
    )
  }
)
