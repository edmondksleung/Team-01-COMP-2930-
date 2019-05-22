        //Sign out function upon onclickevent to redirect to sign up page, update firebase state
        function logout() {
            firebase.auth().signOut();
            alert('Logged Out');
            window.location = 'index.html';
        }