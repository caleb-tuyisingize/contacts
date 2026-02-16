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
          img='../../public/cats/download (1).jpg'
          name='Fluffykins'
          phone='(212) 555-2345'
          email='fluff@me.com'
        />
        <Contacts
          img='../../public/cats/download.jpg'
          name='Felix'
          phone='(212) 555-4567'
          email='thecat@hotmail.com'
        />
        <Contacts
          img='../../public/cats/НейроОткрытки для Любимых❤️.jpg'
          name='Pumpkin'
          phone='(0800) CAT KING'
          email='pumpkin@scrimba.com'
        />
      </div>

    </>
  )
}

export default App
