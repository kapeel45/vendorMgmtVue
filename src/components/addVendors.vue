<<template>
    <div id = "add-vendor">
        <h2> Add new vendor</h2>
        <form v-if="!submitted">
            <label>Vendor Name::</label>
            <input type = "text" required v-model.lazy="vendor.name"></input>
            <label>Company Name::</label>
            <input type = "text" required v-model.lazy="vendor.companyName"></input>
            <label>Email</label>
            <input type = "email" required v-model.lazy="vendor.email"></input>
            <label>Contact</label>
            <input type = "number" min="10" max="10" required v-model.lazy="vendor.contact"></input>
            
        <label>Company Type:</label>
        <select v-model="vendor.author">
            <option v-for="author in authors">{{author}}</option>
        </select>
        <button @click.prevent="post">Add vendor</button>
        </form>
        <div v-if="submitted">
            <h3>thanks for adding your posts</h3>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        post:function(){
            this.$http.post("http://localhost:8081/addVendor",{
                name: this.vendor.name,
                contact:this.vendor.contact,
                vendorType: this.vendor.vendorType,
                email: this.vendor.email,
                userId:1
            }).then(function(data){
                console.log(data);
                this.submitted=true;
            });
        }
    },
    data(){
        return{
            vendor:{
                name:"",
                contact:"",
                email:[],
                vendorType:""
            },
            authors:['Pvt Ltd','LLP','Partnership', 'Propriertership'],
            submitted:false
        }
    }
}
</script>
<style scoped>
#add-vendor *{
    box-sizing: border-box;
}
#add-vendor{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right:10px; 
}
#checkboxes label{
    display: inline-block;
}
</style>
