<<template>
    <div id = "add-blog">
        <h2> Add new Blog</h2>
        <form v-if="!submitted">
            <label>Blog Title::</label>
            <input type = "text" required v-model.lazy="blog.title"></input>
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
        <div id = "checkboxes">
            <label>IoT</label>
            <input type ="checkbox" value="IoT" v-model="blog.categories"/>
            <label>IT</label>
            <input type ="checkbox" value="IT" v-model="blog.categories"/>
            <label>Networking</label>
            <input type ="checkbox" value="Networking" v-model="blog.categories"/>
            <label>Mechanical</label>
            <input type ="checkbox" value="Mechanical" v-model="blog.categories"/>
            <label>Electronics</label>
            <input type ="checkbox" value="Electronics" v-model="blog.categories"/>
        </div>
        <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors">{{author}}</option>
        </select>
        <button @click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>thanks for adding your posts</h3>
        </div>
        <div id = "preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog content: </p>
            <p>{{blog.content}}</p>
            <p>Blog Categories:</p>
            <ul v-for="category in blog.categories">
                <li>{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        post:function(){
            this.$http.post("http://localhost:8081/addBlog",{
                title: this.blog.title,
                content:this.blog.content,
                userId:1
            }).then(function(data){
                console.log(data);
                this.submitted=true;
            });
        }
    },
    data(){
        return{
            blog:{
                title:"",
                content:"",
                categories:[],
                author:""
            },
            authors:['Kapil','Kapeel','Akhila'],
            submitted:false
        }
    }
}
</script>
<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
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
