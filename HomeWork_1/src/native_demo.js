

class Post{

    constructor(){
        this.state = {
            like: 0,
            comments: [
                {},
                {},
                {}
            ]
        }
    }   

    addLike = () => {
        this.state.like++;

        console.log('[Like]', this.state.like );

        this.render();
    }

    render = ( target = document.getElementById('root') ) => {

        console.log('[Render]');

        let node;

        if( this.node ){
            node = this.node;
        } else {
            node = document.createElement('div');
            this.node = node
        }

        node.innerHTML = `
            <h2> Heading </h2>
            <p>
                Lorem...
            </p>
            <ul>
            ${
                this.state.comments.map( (comment, index) => {
                    return `<li> Comment ${index}</li>`;
                }).join('')
            }
            </ul>
            <button class="_btn" > Like! ${this.state.like} </button>
        `;

        node.querySelector('._btn').addEventListener('click', this.addLike );
        
        target.appendChild( node );

    }

}


// let post = new Post();

// post.render();
// post.render();
// post.render();
// post.render();
// post.render();
// post.render();
// post.render();

// console.log( post );


// const map = new GoogleMap();
// const marker = new GoogleMapMarker([12.4242, 12, 300 ]);
// map.appendMarker( marker );

// <GoogleMap>
//     <GoogleMapMarker coords={[12.4242, 12, 300 ]} />
// </GoogleMap>

// JSX 

