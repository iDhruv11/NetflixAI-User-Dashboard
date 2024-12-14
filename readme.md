# **User Stats Dashboard** 📊
> A companion dashboard app for the Netflix clone to view and analyze user account statistics with a modern and visually appealing interface.

---

## **Overview**

The **User Stats Dashboard** is a feature-rich web application that works with the main Netflix clone by providing users with information and statistics associated with their account and profiles. The app offers:
- **Account Information**: View all profiles linked to an account, including primary and secondary profiles.
- **Profile Insights**: Stats like watch history, preferred genres (pie chart), login activity (calendar view), and watch time for the last 7 days (bar chart).
- **Modern UI/UX**: Aesthetic animations, modern design, and eye appealing user interactions.

⚠️ **Note**: The app depends entirely on **Firebase Firestore** data created through the main app. It can only be accessed via its deployed link and cannot be cloned or run locally.

---

## **Features**

### **1. Login and Dashboard Access**
- Users must have an account created on the main Netflix clone app to log in.
- After successful login, users are redirected to the **dashboard page**, which displays:
  - Account info: Profiles, email, and the plan associated with the account.
  - Profile type: Indicates whether a profile is primary or secondary.

---

### **2. Profile-Specific Insights**
When users switch between profiles, they get tailored stats for the selected profile, including:
1. **Preferred Genres**:
   - Displayed using a **Nivo Pie Chart**.
   - Dynamically shows the user’s favorite genres.
2. **Watch History**:
   - A timeline of what the user has watched.
3. **Login Activity**:
   - Visualized on a calendar to show active days.
4. **Watch Time Over the Last 7 Days**:
   - Displayed using a **Nivo Bar Chart**.

---

## **Technologies Used**

| **Technology**         | **Purpose**                                              |
|-------------------------|----------------------------------------------------------|
| **Vite**               | Fast development and optimized build tool.               |
| **React**              | Frontend framework for building user interfaces.         |
| **Next UI Component**  | Pre-built UI components for modern design.               |
| **Tailwind CSS**       | For responsive, utility-first styling.                   |
| **Nivo Charts**        | Interactive and customizable pie and bar charts.         |
| **Firebase Firestore** | Cloud database to fetch and store user data.             |

---

## **How It Works**

1. **Account Creation on Main App**:
   Users must first create an account and profiles in the main Netflix clone app so that they can add profiles.

2. **Dashboard Login**:
   Users log in to the dashboard app using the same credentials as the main app.

3. **Account Overview**:
   After login, users can view account details like all associated profiles, their types (primary/secondary), and account plans.

4. **Profile-Specific Insights**:
   By switching between profiles, users can explore data tailored to each profile, including stats like:
   - **Genres**: A pie chart showcasing their favorite genres.
   - **Activity**: A calendar view displaying login dates.
   - **Watch Time**: A bar chart showing the last 7 days of watchtime.

---

## **Environment and Deployment**

This app is **deployed for production use only** and cannot be run locally due to its dependency on **Firebase Firestore** data generated by the main app.

# **Setup and Usage**

This app cannot be cloned and run locally. Use the  to access the app.

---

## **Steps to Access the App**

1. **Create an account and profiles** in the **Netflix clone app**.
2. Open the **dashboard app** using the deployed link.
3. Log in using the same credentials as the main app.
4. Explore account and profile-specific insights.

---
### **Dashboard Overview**
The main dashboard provides account and profile details with a modern and intuitive UI.

### **Graphs and Charts**
- **Pie Chart**: Displays preferred genres.
- **Bar Chart**: Displays watch time for the last 7 days.
- **Calendar**: Highlights login/active days.

---
## **Contributing**

Since this app is tightly integrated with the Netflix clone and its backend, external contributions are not currently accepted.



