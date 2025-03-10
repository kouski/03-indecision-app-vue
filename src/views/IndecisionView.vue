<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { ref } from 'vue';
import type { ChatMessage } from '../interfaces/chat-messages.interface';

const messages = ref<ChatMessage[]>([

{id:new Date().getTime(),message:'Hola Palomita, un cohetillo??',itsMine: true},
{id:new Date().getTime()+1,message:'No',itsMine: false, image: "https://yesno.wtf/assets/no/21-05540164de4e3229609f106e468fa8e7.gif"},
{id:new Date().getTime(),message:'Seguro??',itsMine: true},
{id:new Date().getTime()+1,message:'Yes',itsMine: false, image: "https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif"},
])



</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages"/>
    <MessageBox />


  </div>
</template>
