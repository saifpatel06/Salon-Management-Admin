export const initialBarbers = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@salon.com',
    phone: '555-0101',
    specialization: 'Hair Cutting',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria@salon.com',
    phone: '555-0102',
    specialization: 'Hair Coloring',
    status: 'Active',
  },
  {
    id: 3,
    name: 'David Lee',
    email: 'david@salon.com',
    phone: '555-0103',
    specialization: 'Beard Grooming',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    email: 'sarah@salon.com',
    phone: '555-0104',
    specialization: 'Hair Styling',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Mike Wilson',
    email: 'mike@salon.com',
    phone: '555-0105',
    specialization: 'Men\'s Grooming',
    status: 'Active',
  },
];

export const initialServices = [
  { id: 1, name: 'Haircut', price: 30, duration: 30, category: 'Hair' },
  { id: 2, name: 'Hair Coloring', price: 80, duration: 90, category: 'Hair' },
  { id: 3, name: 'Beard Trim', price: 20, duration: 20, category: 'Beard' },
  { id: 4, name: 'Shave', price: 25, duration: 25, category: 'Beard' },
  { id: 5, name: 'Hair Styling', price: 40, duration: 45, category: 'Hair' },
  { id: 6, name: 'Kids Haircut', price: 20, duration: 20, category: 'Hair' },
  { id: 7, name: 'Facial', price: 50, duration: 60, category: 'Facial' },
  { id: 8, name: 'Hair Treatment', price: 60, duration: 60, category: 'Hair' },
];

// December 2024 Appointments - Comprehensive data for all calendar views
export const initialAppointments = [
  // Week 1: December 1-7, 2024
  { id: 1, customerName: 'Alice Johnson', barber: 'John Smith', service: 'Haircut', date: '2024-12-02', time: '9:00 AM', status: 'Confirmed' },
  { id: 2, customerName: 'Bob Williams', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-02', time: '10:00 AM', status: 'Confirmed' },
  { id: 3, customerName: 'Charlie Brown', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-02', time: '11:00 AM', status: 'Pending' },
  { id: 4, customerName: 'Diana Prince', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-02', time: '2:00 PM', status: 'Confirmed' },
  
  { id: 5, customerName: 'Eve Davis', barber: 'John Smith', service: 'Haircut', date: '2024-12-03', time: '9:00 AM', status: 'Confirmed' },
  { id: 6, customerName: 'Frank Miller', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-03', time: '10:00 AM', status: 'Confirmed' },
  { id: 7, customerName: 'Grace Lee', barber: 'Maria Garcia', service: 'Hair Treatment', date: '2024-12-03', time: '11:00 AM', status: 'Confirmed' },
  { id: 8, customerName: 'Henry Ford', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-03', time: '1:00 PM', status: 'Completed' },
  
  { id: 9, customerName: 'Ivy Chen', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-04', time: '9:00 AM', status: 'Confirmed' },
  { id: 10, customerName: 'Jack Ryan', barber: 'John Smith', service: 'Haircut', date: '2024-12-04', time: '10:00 AM', status: 'Confirmed' },
  { id: 11, customerName: 'Kelly Green', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-04', time: '11:00 AM', status: 'Pending' },
  { id: 12, customerName: 'Liam Scott', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-04', time: '2:00 PM', status: 'Confirmed' },
  { id: 13, customerName: 'Mia Taylor', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-04', time: '3:00 PM', status: 'Confirmed' },
  
  { id: 14, customerName: 'Noah White', barber: 'John Smith', service: 'Haircut', date: '2024-12-05', time: '9:00 AM', status: 'Confirmed' },
  { id: 15, customerName: 'Olivia Brown', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-05', time: '10:00 AM', status: 'Confirmed' },
  { id: 16, customerName: 'Paul Anderson', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-05', time: '11:00 AM', status: 'Confirmed' },
  { id: 17, customerName: 'Quinn Martinez', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-05', time: '1:00 PM', status: 'Pending' },
  { id: 18, customerName: 'Rachel Green', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-05', time: '2:00 PM', status: 'Confirmed' },
  
  { id: 19, customerName: 'Sam Wilson', barber: 'John Smith', service: 'Haircut', date: '2024-12-06', time: '9:00 AM', status: 'Confirmed' },
  { id: 20, customerName: 'Tina Turner', barber: 'Maria Garcia', service: 'Hair Treatment', date: '2024-12-06', time: '10:00 AM', status: 'Confirmed' },
  { id: 21, customerName: 'Uma Thurman', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-06', time: '11:00 AM', status: 'Confirmed' },
  { id: 22, customerName: 'Victor Hugo', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-06', time: '1:00 PM', status: 'Completed' },
  { id: 23, customerName: 'Wendy Williams', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-06', time: '2:00 PM', status: 'Confirmed' },
  { id: 24, customerName: 'Xavier Woods', barber: 'John Smith', service: 'Haircut', date: '2024-12-06', time: '3:00 PM', status: 'Confirmed' },
  
  { id: 25, customerName: 'Yara Shah', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-07', time: '10:00 AM', status: 'Confirmed' },
  { id: 26, customerName: 'Zack Morris', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-07', time: '11:00 AM', status: 'Pending' },

  // Week 2: December 8-14, 2024
  { id: 27, customerName: 'Amy Adams', barber: 'John Smith', service: 'Haircut', date: '2024-12-09', time: '9:00 AM', status: 'Confirmed' },
  { id: 28, customerName: 'Ben Parker', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-09', time: '10:00 AM', status: 'Confirmed' },
  { id: 29, customerName: 'Chloe Kim', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-09', time: '11:00 AM', status: 'Confirmed' },
  { id: 30, customerName: 'Daniel Craig', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-09', time: '2:00 PM', status: 'Confirmed' },
  { id: 31, customerName: 'Emma Stone', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-09', time: '3:00 PM', status: 'Pending' },
  
  { id: 32, customerName: 'Felix Jones', barber: 'John Smith', service: 'Haircut', date: '2024-12-10', time: '9:00 AM', status: 'Confirmed' },
  { id: 33, customerName: 'Gina Rodriguez', barber: 'Maria Garcia', service: 'Hair Treatment', date: '2024-12-10', time: '10:00 AM', status: 'Confirmed' },
  { id: 34, customerName: 'Harry Potter', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-10', time: '11:00 AM', status: 'Confirmed' },
  { id: 35, customerName: 'Isabella Swan', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-10', time: '1:00 PM', status: 'Completed' },
  { id: 36, customerName: 'James Bond', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-10', time: '2:00 PM', status: 'Confirmed' },
  
  { id: 37, customerName: 'Kate Bishop', barber: 'John Smith', service: 'Haircut', date: '2024-12-11', time: '9:00 AM', status: 'Confirmed' },
  { id: 38, customerName: 'Luke Skywalker', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-11', time: '10:00 AM', status: 'Confirmed' },
  { id: 39, customerName: 'Monica Geller', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-11', time: '11:00 AM', status: 'Confirmed' },
  { id: 40, customerName: 'Nathan Drake', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-11', time: '1:00 PM', status: 'Pending' },
  { id: 41, customerName: 'Oscar Isaac', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-11', time: '2:00 PM', status: 'Confirmed' },
  
  { id: 42, customerName: 'Peter Parker', barber: 'John Smith', service: 'Haircut', date: '2024-12-12', time: '9:00 AM', status: 'Confirmed' },
  { id: 43, customerName: 'Quincy Adams', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-12', time: '10:00 AM', status: 'Confirmed' },
  { id: 44, customerName: 'Rosa Diaz', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-12', time: '11:00 AM', status: 'Confirmed' },
  { id: 45, customerName: 'Steve Rogers', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-12', time: '1:00 PM', status: 'Confirmed' },
  { id: 46, customerName: 'Tony Stark', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-12', time: '2:00 PM', status: 'Completed' },
  { id: 47, customerName: 'Ursula Stone', barber: 'John Smith', service: 'Haircut', date: '2024-12-12', time: '3:00 PM', status: 'Confirmed' },
  
  // December 13, 2024 (TODAY) - Multiple appointments
  { id: 48, customerName: 'Victor Stone', barber: 'John Smith', service: 'Haircut', date: '2024-12-13', time: '9:00 AM', status: 'Confirmed' },
  { id: 49, customerName: 'Wanda Maximoff', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-13', time: '10:00 AM', status: 'Confirmed' },
  { id: 50, customerName: 'Xavier Charles', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-13', time: '11:00 AM', status: 'Confirmed' },
  { id: 51, customerName: 'Yelena Belova', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-13', time: '12:00 PM', status: 'Confirmed' },
  { id: 52, customerName: 'Zachary Levi', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-13', time: '1:00 PM', status: 'Pending' },
  { id: 53, customerName: 'Anna Williams', barber: 'John Smith', service: 'Haircut', date: '2024-12-13', time: '2:00 PM', status: 'Confirmed' },
  { id: 54, customerName: 'Bruce Wayne', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-13', time: '3:00 PM', status: 'Confirmed' },
  { id: 55, customerName: 'Carol Danvers', barber: 'Maria Garcia', service: 'Hair Treatment', date: '2024-12-13', time: '4:00 PM', status: 'Pending' },
  
  { id: 56, customerName: 'Derek Hale', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-14', time: '10:00 AM', status: 'Confirmed' },
  { id: 57, customerName: 'Elena Gilbert', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-14', time: '11:00 AM', status: 'Pending' },
  
  // Week 3: December 15-21, 2024
  { id: 58, customerName: 'Finn Hudson', barber: 'John Smith', service: 'Haircut', date: '2024-12-16', time: '9:00 AM', status: 'Confirmed' },
  { id: 59, customerName: 'Gwen Stacy', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-16', time: '10:00 AM', status: 'Confirmed' },
  { id: 60, customerName: 'Hank Pym', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-16', time: '11:00 AM', status: 'Confirmed' },
  { id: 61, customerName: 'Iris West', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-16', time: '2:00 PM', status: 'Confirmed' },
  { id: 62, customerName: 'Jason Todd', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-16', time: '3:00 PM', status: 'Pending' },
  
  { id: 63, customerName: 'Kara Danvers', barber: 'John Smith', service: 'Haircut', date: '2024-12-17', time: '9:00 AM', status: 'Confirmed' },
  { id: 64, customerName: 'Lois Lane', barber: 'Maria Garcia', service: 'Hair Treatment', date: '2024-12-17', time: '10:00 AM', status: 'Confirmed' },
  { id: 65, customerName: 'Matt Murdock', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-17', time: '11:00 AM', status: 'Confirmed' },
  { id: 66, customerName: 'Natasha Romanoff', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-17', time: '1:00 PM', status: 'Completed' },
  { id: 67, customerName: 'Oliver Queen', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-17', time: '2:00 PM', status: 'Confirmed' },
  
  { id: 68, customerName: 'Pepper Potts', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-18', time: '9:00 AM', status: 'Confirmed' },
  { id: 69, customerName: 'Quill Star', barber: 'John Smith', service: 'Haircut', date: '2024-12-18', time: '10:00 AM', status: 'Confirmed' },
  { id: 70, customerName: 'Reed Richards', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-18', time: '11:00 AM', status: 'Confirmed' },
  { id: 71, customerName: 'Sue Storm', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-18', time: '1:00 PM', status: 'Pending' },
  { id: 72, customerName: 'Thor Odinson', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-18', time: '2:00 PM', status: 'Confirmed' },
  
  { id: 73, customerName: 'Valkyrie Thompson', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-19', time: '9:00 AM', status: 'Confirmed' },
  { id: 74, customerName: 'Wade Wilson', barber: 'John Smith', service: 'Haircut', date: '2024-12-19', time: '10:00 AM', status: 'Confirmed' },
  { id: 75, customerName: 'Yvonne Craig', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-19', time: '11:00 AM', status: 'Confirmed' },
  { id: 76, customerName: 'Zoe Saldana', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-19', time: '1:00 PM', status: 'Confirmed' },
  { id: 77, customerName: 'Adam West', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-19', time: '2:00 PM', status: 'Completed' },
  
  { id: 78, customerName: 'Betty Cooper', barber: 'John Smith', service: 'Haircut', date: '2024-12-20', time: '9:00 AM', status: 'Confirmed' },
  { id: 79, customerName: 'Clark Kent', barber: 'Maria Garcia', service: 'Hair Treatment', date: '2024-12-20', time: '10:00 AM', status: 'Confirmed' },
  { id: 80, customerName: 'Dick Grayson', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-20', time: '11:00 AM', status: 'Confirmed' },
  { id: 81, customerName: 'Eddie Brock', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-20', time: '1:00 PM', status: 'Pending' },
  { id: 82, customerName: 'Felicity Smoak', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-20', time: '2:00 PM', status: 'Confirmed' },
  
  { id: 83, customerName: 'Gamora Zen', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-21', time: '10:00 AM', status: 'Confirmed' },
  { id: 84, customerName: 'Hal Jordan', barber: 'John Smith', service: 'Haircut', date: '2024-12-21', time: '11:00 AM', status: 'Pending' },
  
  // Week 4: December 22-28, 2024
  { id: 85, customerName: 'Ian McKellen', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-23', time: '9:00 AM', status: 'Confirmed' },
  { id: 86, customerName: 'Jessica Jones', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-23', time: '10:00 AM', status: 'Confirmed' },
  { id: 87, customerName: 'Kurt Wagner', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-23', time: '11:00 AM', status: 'Confirmed' },
  { id: 88, customerName: 'Logan Howlett', barber: 'John Smith', service: 'Haircut', date: '2024-12-23', time: '2:00 PM', status: 'Confirmed' },
  { id: 89, customerName: 'Mary Jane Watson', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-23', time: '3:00 PM', status: 'Pending' },
  
  { id: 90, customerName: 'Nick Fury', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-24', time: '9:00 AM', status: 'Confirmed' },
  { id: 91, customerName: 'Ororo Munroe', barber: 'Maria Garcia', service: 'Hair Treatment', date: '2024-12-24', time: '10:00 AM', status: 'Confirmed' },
  
  { id: 92, customerName: 'Phoebe Buffay', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-26', time: '10:00 AM', status: 'Confirmed' },
  { id: 93, customerName: 'Ross Geller', barber: 'John Smith', service: 'Haircut', date: '2024-12-26', time: '11:00 AM', status: 'Confirmed' },
  { id: 94, customerName: 'Scott Lang', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-26', time: '1:00 PM', status: 'Confirmed' },
  { id: 95, customerName: 'T\'Challa Udaku', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-26', time: '2:00 PM', status: 'Completed' },
  
  { id: 96, customerName: 'Vision Stark', barber: 'John Smith', service: 'Haircut', date: '2024-12-27', time: '9:00 AM', status: 'Confirmed' },
  { id: 97, customerName: 'Warren Worthington', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-27', time: '10:00 AM', status: 'Confirmed' },
  { id: 98, customerName: 'Yondu Udonta', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-27', time: '11:00 AM', status: 'Confirmed' },
  { id: 99, customerName: 'Zatanna Zatara', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-27', time: '2:00 PM', status: 'Pending' },
  
  { id: 100, customerName: 'Arthur Curry', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-28', time: '10:00 AM', status: 'Confirmed' },
  { id: 101, customerName: 'Barry Allen', barber: 'John Smith', service: 'Haircut', date: '2024-12-28', time: '11:00 AM', status: 'Confirmed' },
  
  // Week 5: December 29-31, 2024
  { id: 102, customerName: 'Cisco Ramon', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-30', time: '9:00 AM', status: 'Confirmed' },
  { id: 103, customerName: 'Diana of Themyscira', barber: 'Maria Garcia', service: 'Hair Treatment', date: '2024-12-30', time: '10:00 AM', status: 'Confirmed' },
  { id: 104, customerName: 'Eobard Thawne', barber: 'Mike Wilson', service: 'Haircut', date: '2024-12-30', time: '11:00 AM', status: 'Confirmed' },
  { id: 105, customerName: 'Frost Killer', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-30', time: '1:00 PM', status: 'Pending' },
  
  { id: 106, customerName: 'Gordon Jim', barber: 'John Smith', service: 'Haircut', date: '2024-12-31', time: '9:00 AM', status: 'Confirmed' },
  { id: 107, customerName: 'Harley Quinn', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2024-12-31', time: '10:00 AM', status: 'Confirmed' },
  { id: 108, customerName: 'Ivy Pepper', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2024-12-31', time: '11:00 AM', status: 'Confirmed' },
  { id: 109, customerName: 'Joker Prince', barber: 'David Lee', service: 'Beard Trim', date: '2024-12-31', time: '1:00 PM', status: 'Confirmed' },
  { id: 110, customerName: 'Kent Clark', barber: 'Mike Wilson', service: 'Shave', date: '2024-12-31', time: '2:00 PM', status: 'Confirmed' },
];