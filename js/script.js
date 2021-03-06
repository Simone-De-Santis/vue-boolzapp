console.log("Vue ready", Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    currentContact: 0,
    newText: "",
    userSearch: "",
    user: {
      name: "Nome Utente",
      avatar: "_io",
    },
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "received",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    setCurrentContact(index) {
      this.currentContact = index;
    },
    sendMessage() {
      if (!this.newText) return;
      const newMessage = {
        date: dayjs().format("DD/MM/YYYY HH/mm/ss"),
        message: this.newText,
        status: "sent",
      };
      this.contacts[this.currentContact].messages.push(newMessage);
      this.newText = "";
      setTimeout(() => {
        const newMessageReceived = {
          date: dayjs().format("DD/MM/YYYY HH/mm/ss"),
          message: "ok",
          status: "received",
        };
        this.contacts[this.currentContact].messages.push(newMessageReceived);
      }, 1000);
    },


    // dobbiamo controllare se cio' che ?? scritto dall'utente ?? presente nei contatti e se lo ?? stampare solo se presente

    isVisible(nameContact) {
      var result = false;
      if (this.userSearch == "") {
        result = true;
      } else {
        result = nameContact.trim().toLowerCase().includes(this.userSearch.toLowerCase());
      }
      return result
    },
  },
});
