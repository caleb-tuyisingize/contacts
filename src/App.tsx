import Contacts from "./components/Contacts"

function App() {

  return (
    <>
      <div className="flex flex-wrap gap-3">

        <Contacts
          img='../../public/cats/Cat Wallpaper.jpg'
          name='Mr. Whiskerson'
          phone='(212) 555-1234'
          email='mr.whiskaz@catnap.meow'

        />
        <Contacts
          img='../../public/cats/Cat Wallpaper.jpg'
          name='Mr. Whiskerson'
          phone='(212) 555-1234'
          email='mr.whiskaz@catnap.meow'
        />
        <Contacts
          img='../../public/cats/Cat Wallpaper.jpg'
          name='Mr. Whiskerson'
          phone='(212) 555-1234'
          email='mr.whiskaz@catnap.meow'
        />
        <Contacts
          img='../../public/cats/Cat Wallpaper.jpg'
          name='Mr. Whiskerson'
          phone='(212) 555-1234'
          email='mr.whiskaz@catnap.meow'
        />
      </div>

    </>
  )
}

export default App
