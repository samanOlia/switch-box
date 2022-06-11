const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Madjid Samii',
    position: 'neurosurgeon',
    photo: 'images/Majid_Samii.jpg',
    text:
      `   Professor Madjid Samii was born in 19 June 1937 in Tehran, Iran and was grown in a scientific family. After
      finishing his high school education in Iran, he moved to Germany and started his medical study at University of
      Mainz. Regarding his achievements during his medical study and his final university scores as receiving the
      highest achievable score in the final medical examination, he received the prize of Iranian Science Ministry for
      the best Iranian students in Europe`,
  },
  {
    name: 'Maryam Mirzakhani',
    position: 'mathematician',
    photo:
      'images/Maryam_Mirzakhani_in_Seoul_2014.jpg',
    text:
      'Maryam Mirzakhani was an Iranian mathematician and a professor of mathematics at Stanford University. Her research topics included Teichmüller theory',
  },
  {
    name: 'Ali Daei',
    position: 'Football Player',
    photo: 'images/alidaei.jpg',
    text:
      'Ali Daei is an Iranian football manager and former player. A striker, he was the captain of the Iranian national team between 2000 and 2006',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 5000)
