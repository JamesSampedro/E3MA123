const Main = ({title,paragraph1, list1, list2, list3, list4}) => {
    return (
        <main>
            <h1>{title}</h1>
            <p><center>{paragraph1}</center></p>
            <ol>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                <li>{list4}</li>
            </ol>
        </main>
    )
}

export default Main
