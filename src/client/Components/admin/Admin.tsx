render() {
    
    return (
        <main className="container">
            <section className="row my-3">
                <div className="col-md-12">
                    <form
                        className="form-group border border-primary rounded shasow-lg p-3"
                        onSubmit={(e) => this.handleBlogSubmit(e)}
                    >
                        <label>Favorites</label>
                        <input
                            type="text"
                            className="form-control p-1 mb-1"
                            placeholder="Place-holder"
                            value={this.StaticRange.title}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value})}/>
                        <label>placeholder</label>
                        <textarea
                            rows={5}
                            className="form-control p-1 mb-1"
                            placeholder="placeholder"
                            value={this.state.body}
                            onChange={(e: React.ChangeEvent.<HTMLTextAreaElement>) => this.setState({ body: e.target.value })} />
                        <button
                            type="submit"
                            className="btn btn-warning d-block border border-primary mt-2 p-2 shadow">placeholder</button>
                    </form>
                </div>
            </section>
        </main>
    );
}