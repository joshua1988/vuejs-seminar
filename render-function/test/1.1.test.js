require('./util').createTestCase(__filename, (window, logs, done) => {
  expect(window.document.getElementById('app').innerHTML).toMatch(
    `<h1 id="welcome" class="red">This should be red</h1>`
  )
  expect(window.document.getElementById('app').innerHTML).toMatch(
    `<button>toggle red</button>`
  )

  window.$click('button')
  setTimeout(() => {
    expect(window.document.querySelector('h1').classList.contains('red')).toBe(false)
    done()
  }, 0)
})
