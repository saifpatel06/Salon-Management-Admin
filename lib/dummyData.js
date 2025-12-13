export const initialBarbers = [
  { id: 1, name: 'John Smith', email: 'john@salon.com', phone: '555-0101', specialization: 'Hair Cutting', status: 'Active' },
  { id: 2, name: 'Maria Garcia', email: 'maria@salon.com', phone: '555-0102', specialization: 'Hair Coloring', status: 'Active' },
  { id: 3, name: 'David Lee', email: 'david@salon.com', phone: '555-0103', specialization: 'Beard Grooming', status: 'Active' },
  { id: 4, name: 'Sarah Johnson', email: 'sarah@salon.com', phone: '555-0104', specialization: 'Hair Styling', status: 'Active' },
  { id: 5, name: 'Mike Wilson', email: 'mike@salon.com', phone: '555-0105', specialization: 'Men\'s Grooming', status: 'Active' },
];

export const initialServices = [
  { id: 1, name: 'Haircut', price: 30, duration: 30, category: 'Hair' },
  { id: 2, name: 'Hair Coloring', price: 80, duration: 90, category: 'Hair' },
  { id: 3, name: 'Beard Trim', price: 20, duration: 20, category: 'Beard' },
  { id: 4, name: 'Shave', price: 25, duration: 25, category: 'Beard' },
  { id: 5, name: 'Hair Styling', price: 40, duration: 45, category: 'Hair' },
];

export const initialAppointments = [
  // December 2024 - Week 1
  { id: 1, customerName: 'Alice Johnson', barber: 'John Smith', service: 'Haircut', date: '2025-12-02', time: '9:00 AM', status: 'Confirmed' },
  { id: 2, customerName: 'Bob Williams', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2025-12-02', time: '10:00 AM', status: 'Confirmed' },
  { id: 3, customerName: 'Charlie Brown', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-02', time: '11:00 AM', status: 'Pending' },
  { id: 4, customerName: 'Diana Prince', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-02', time: '2:00 PM', status: 'Confirmed' },
  
  { id: 5, customerName: 'Eve Davis', barber: 'John Smith', service: 'Haircut', date: '2025-12-03', time: '9:00 AM', status: 'Confirmed' },
  { id: 6, customerName: 'Frank Miller', barber: 'Mike Wilson', service: 'Shave', date: '2025-12-03', time: '10:00 AM', status: 'Confirmed' },
  { id: 7, customerName: 'Grace Lee', barber: 'Maria Garcia', service: 'Haircut', date: '2025-12-03', time: '11:00 AM', status: 'Confirmed' },
  
  { id: 8, customerName: 'Henry Ford', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-05', time: '9:00 AM', status: 'Confirmed' },
  { id: 9, customerName: 'Ivy Chen', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-05', time: '10:00 AM', status: 'Confirmed' },
  { id: 10, customerName: 'Jack Ryan', barber: 'John Smith', service: 'Haircut', date: '2025-12-05', time: '11:00 AM', status: 'Confirmed' },
  
  { id: 11, customerName: 'Kelly Green', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2025-12-06', time: '9:00 AM', status: 'Pending' },
  { id: 12, customerName: 'Liam Scott', barber: 'Mike Wilson', service: 'Haircut', date: '2025-12-06', time: '10:00 AM', status: 'Confirmed' },
  { id: 13, customerName: 'Mia Taylor', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-06', time: '11:00 AM', status: 'Confirmed' },
  
  // December 2024 - Week 2
  { id: 14, customerName: 'Noah White', barber: 'John Smith', service: 'Haircut', date: '2025-12-09', time: '9:00 AM', status: 'Confirmed' },
  { id: 15, customerName: 'Olivia Brown', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-09', time: '10:00 AM', status: 'Confirmed' },
  { id: 16, customerName: 'Paul Anderson', barber: 'Mike Wilson', service: 'Shave', date: '2025-12-09', time: '11:00 AM', status: 'Confirmed' },
  
  { id: 17, customerName: 'Quinn Martinez', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2025-12-10', time: '9:00 AM', status: 'Pending' },
  { id: 18, customerName: 'Rachel Green', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-10', time: '10:00 AM', status: 'Confirmed' },
  { id: 19, customerName: 'Sam Wilson', barber: 'John Smith', service: 'Haircut', date: '2025-12-10', time: '11:00 AM', status: 'Confirmed' },
  
  { id: 20, customerName: 'Tina Turner', barber: 'Maria Garcia', service: 'Haircut', date: '2025-12-11', time: '9:00 AM', status: 'Confirmed' },
  { id: 21, customerName: 'Uma Thurman', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-11', time: '10:00 AM', status: 'Confirmed' },
  { id: 22, customerName: 'Victor Hugo', barber: 'Mike Wilson', service: 'Haircut', date: '2025-12-11', time: '11:00 AM', status: 'Completed' },
  
  { id: 23, customerName: 'Wendy Williams', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-12', time: '9:00 AM', status: 'Confirmed' },
  { id: 24, customerName: 'Xavier Woods', barber: 'John Smith', service: 'Haircut', date: '2025-12-12', time: '10:00 AM', status: 'Confirmed' },
  { id: 25, customerName: 'Yara Shah', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2025-12-12', time: '11:00 AM', status: 'Confirmed' },
  
  // December 13, 2024 (TODAY) - Multiple appointments
  { id: 26, customerName: 'Zack Morris', barber: 'Mike Wilson', service: 'Shave', date: '2025-12-13', time: '9:00 AM', status: 'Pending' },
  { id: 27, customerName: 'Amy Adams', barber: 'John Smith', service: 'Haircut', date: '2025-12-13', time: '10:00 AM', status: 'Confirmed' },
  { id: 28, customerName: 'Ben Parker', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-13', time: '11:00 AM', status: 'Confirmed' },
  { id: 29, customerName: 'Chloe Kim', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2025-12-13', time: '12:00 PM', status: 'Confirmed' },
  { id: 30, customerName: 'Daniel Craig', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-13', time: '1:00 PM', status: 'Confirmed' },
  { id: 31, customerName: 'Emma Stone', barber: 'Mike Wilson', service: 'Haircut', date: '2025-12-13', time: '2:00 PM', status: 'Pending' },
  
  { id: 32, customerName: 'Felix Jones', barber: 'John Smith', service: 'Haircut', date: '2025-12-14', time: '10:00 AM', status: 'Confirmed' },
  
  // December 2024 - Week 3
  { id: 33, customerName: 'Gina Rodriguez', barber: 'Maria Garcia', service: 'Haircut', date: '2025-12-16', time: '9:00 AM', status: 'Confirmed' },
  { id: 34, customerName: 'Harry Potter', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-16', time: '10:00 AM', status: 'Confirmed' },
  { id: 35, customerName: 'Isabella Swan', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-16', time: '11:00 AM', status: 'Completed' },
  
  { id: 36, customerName: 'James Bond', barber: 'Mike Wilson', service: 'Shave', date: '2025-12-17', time: '9:00 AM', status: 'Confirmed' },
  { id: 37, customerName: 'Kate Bishop', barber: 'John Smith', service: 'Haircut', date: '2025-12-17', time: '10:00 AM', status: 'Confirmed' },
  { id: 38, customerName: 'Luke Skywalker', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2025-12-17', time: '11:00 AM', status: 'Confirmed' },
  
  { id: 39, customerName: 'Monica Geller', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-18', time: '9:00 AM', status: 'Confirmed' },
  { id: 40, customerName: 'Nathan Drake', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-18', time: '10:00 AM', status: 'Pending' },
  { id: 41, customerName: 'Oscar Isaac', barber: 'Mike Wilson', service: 'Haircut', date: '2025-12-18', time: '11:00 AM', status: 'Confirmed' },
  
  { id: 42, customerName: 'Peter Parker', barber: 'John Smith', service: 'Haircut', date: '2025-12-19', time: '9:00 AM', status: 'Confirmed' },
  { id: 43, customerName: 'Quincy Adams', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2025-12-19', time: '10:00 AM', status: 'Confirmed' },
  { id: 44, customerName: 'Rosa Diaz', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-19', time: '11:00 AM', status: 'Confirmed' },
  
  { id: 45, customerName: 'Steve Rogers', barber: 'Mike Wilson', service: 'Shave', date: '2025-12-20', time: '9:00 AM', status: 'Confirmed' },
  { id: 46, customerName: 'Tony Stark', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-20', time: '10:00 AM', status: 'Completed' },
  { id: 47, customerName: 'Ursula Stone', barber: 'John Smith', service: 'Haircut', date: '2025-12-20', time: '11:00 AM', status: 'Confirmed' },
  
  // December 2024 - Week 4
  { id: 48, customerName: 'Victor Stone', barber: 'John Smith', service: 'Haircut', date: '2025-12-23', time: '9:00 AM', status: 'Confirmed' },
  { id: 49, customerName: 'Wanda Maximoff', barber: 'Maria Garcia', service: 'Hair Coloring', date: '2025-12-23', time: '10:00 AM', status: 'Confirmed' },
  { id: 50, customerName: 'Xavier Charles', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-23', time: '11:00 AM', status: 'Confirmed' },
  
  { id: 51, customerName: 'Yelena Belova', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-26', time: '10:00 AM', status: 'Confirmed' },
  { id: 52, customerName: 'Zachary Levi', barber: 'Mike Wilson', service: 'Shave', date: '2025-12-26', time: '11:00 AM', status: 'Pending' },
  
  { id: 53, customerName: 'Anna Williams', barber: 'John Smith', service: 'Haircut', date: '2025-12-27', time: '9:00 AM', status: 'Confirmed' },
  { id: 54, customerName: 'Bruce Wayne', barber: 'David Lee', service: 'Beard Trim', date: '2025-12-27', time: '10:00 AM', status: 'Confirmed' },
  { id: 55, customerName: 'Carol Danvers', barber: 'Maria Garcia', service: 'Haircut', date: '2025-12-27', time: '11:00 AM', status: 'Pending' },
  
  { id: 56, customerName: 'Derek Hale', barber: 'Mike Wilson', service: 'Haircut', date: '2025-12-30', time: '10:00 AM', status: 'Confirmed' },
  { id: 57, customerName: 'Elena Gilbert', barber: 'Sarah Johnson', service: 'Hair Styling', date: '2025-12-30', time: '11:00 AM', status: 'Pending' },
];